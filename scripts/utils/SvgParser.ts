import { optimize,OptimizeOptions,OptimizedSvg } from 'svgo'
import XMLJs from 'xml-js'; 
import { SvgoPlugins } from './tools'

export class SvgParser {
    private template: Record<string, (content: string) => string>;
    private lastColorCount: number; // 记录最后一个的颜色
    constructor(private content: string, private name?: string){
        this.content = content;
        this.name = name || '';
        this.lastColorCount = 0;
        this.template = {
            'react' : (content: string) => (
                `
                import React from 'react';
                import {ISvgIconProps, SvgIconWrapper} from '../components';
                
                export default SvgIconWrapper(
                    '${this.name}',
                    false,
                    (props: ISvgIconProps) => (
                        ${content}
                    )
                );
                `
            ),
            'vue' : (content: string) => (
                `
                import React from 'react';
                import { VNode } from 'vue';
                import {ISvgIconProps, IconHelper, SvgIconWrapper} from '../components';

                export default SvgIconWrapper(
                    '${this.name}',
                    false,
                    (h: IconHelper, props: ISvgIconProps) => (
                        ${content}
                    ) as any as VNode
                )
                `
            ),
        }
    }
    private replaceAttr(props: {[key: string]: string}, name: string) {
        if(props.width && name === 'svg') props.width = `{props.size}`;
        if(props.height && name === 'svg') props.height = `{props.size}`;
        if(props.xmlns) delete props.xmlns;
        if(props['stroke-linecap']) {
            delete props['stroke-linecap'];
            props['strokeLinecap'] = `{props.strokeLinecap}`;
        }
        if(props['stroke-width']) {
            delete props['stroke-width'];
            props['strokeWidth'] = `{props.strokeWidth}`;
        }
        if(props['stroke-linejoin']) {
            delete props['stroke-linejoin'];
            props['strokeLinejoin'] = `{props.strokeLinejoin}`;
        }
        // 为满足变色 单独处理path样式，非path标签 颜色固定 
        if(props.stroke) props.stroke = `{props.colors[${ this.lastColorCount > 2 ? 2 : this.lastColorCount }]}`;
        if(props.fill && name !== 'svg') {
            if(name === 'path'){
                if(props.stroke){
                    if(this.lastColorCount < 3) this.lastColorCount += 1;
                    props.fill = `{props.colors[${this.lastColorCount}]}`;
                    if(this.lastColorCount < 3) this.lastColorCount += 1;
                }else{
                    props.fill = `{props.colors[${this.lastColorCount}]}`;
                }
            }else{
                props.fill = `{props.colors[${props.stroke ? this.lastColorCount + 1 : this.lastColorCount}]}`;
            }
        }
        return props;
    }
    private parser(svgTree: XMLJs.Element | XMLJs.ElementCompact): XMLJs.Element | XMLJs.ElementCompact{
        // 递归遍历树 修改attributes中的width、height、fill、stroke、stroke-width、stroke-linejoin
        for(let i of svgTree.elements){
            i.attributes = this.replaceAttr(i.attributes, i.name);
            if(i.elements){
                this.parser(i);
            }
        }
        return svgTree;
    }
    
    // 替换svg中的属性如width、height、stroke之类的
    private getStringAfterCompiler(): string{
        // const result = optimize(this.content,SvgoPlugins as OptimizeOptions) as OptimizedSvg;
        // if(result.error) throw new Error(result.error);
        // const SVGjson = XMLJs.xml2js(result.data); // 获取SVG的AST
        const SVGjson = XMLJs.xml2js(this.content);
        const svgTree = this.parser(SVGjson);
        const svgStr = XMLJs.js2xml(svgTree);
        return svgStr.replace(/"{(.+?)}"/ig,($1) => {
            return $1.replace(/\"/g,'')
        })
    }

    transform(type: 'vue' | 'react'){
        return this.template[type](this.getStringAfterCompiler());
    }
}