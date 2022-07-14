import { optimize,OptimizeOptions,OptimizedSvg } from 'svgo'
import XMLJs from 'xml-js'; 
import { SvgoPlugins } from './tools'

export class SvgParser {
    private template: Record<string, (content: string) => string>;
    private lastColor: string; // 记录最后一个的颜色
    constructor(private content: string, private name?: string){
        this.content = content;
        this.name = name || '';
        this.lastColor = '';
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
                import {ISvgIconProps, IconHelper, SvgIconWrapper} from '../components';

                export default SvgIconWrapper(
                    '${this.name}',
                    false,
                    (h: IconHelper, props: ISvgIconProps) => (
                        ${content}
                    )
                )
                `
            ),
        }
    }
    private replaceAttr(props: {[key: string]: string}, isRoot: boolean = true) {
        if(props.width) props.width = `{props.size}`;
        if(props.height) props.height = `{props.size}`;
        if(props.xmlns) delete props.xmlns;
        if(props.fill && !isRoot) {
            props.fill = "{props.colors[1]}";
        }
        if(props.stroke) props.stroke = `{props.colors[0]}`;
        if(props['stroke-width']) {
            delete props['stroke-width'];
            props['strokeWidth'] = `{props.strokeWidth}`;
        }
        if(props['stroke-linejoin']) {
            delete props['stroke-linejoin'];
            props['strokeLinejoin'] = `{props.strokeLinejoin}`;
        }
        
        return props;
    }
    private parser(svgTree: XMLJs.Element | XMLJs.ElementCompact): XMLJs.Element | XMLJs.ElementCompact{
        // 递归遍历树 修改attributes中的width、height、fill、stroke、stroke-width、stroke-linejoin
        for(let i of svgTree.elements){
            i.attributes = this.replaceAttr(i.attributes, i.name === 'svg');
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
        const SVGjson = XMLJs.xml2js(this.content); // 获取SVG的AST
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