import { optimize,OptimizeOptions,OptimizedSvg } from 'svgo'
import XMLJs from 'xml-js'; 
import { SvgoPlugins } from './tools'

export class SvgParser {
    constructor(private content: string, private name?: string){
        this.content = content;
        this.name = name || '';
    }
    // 替换svg中的属性如width、height、stroke之类的
    compiler(): string{
        const result = optimize(this.content,SvgoPlugins as OptimizeOptions) as OptimizedSvg;
        if(result.error) throw new Error(result.error);
        const SVGjson = XMLJs.xml2js(result.data)
        console.log(JSON.stringify(SVGjson,undefined,2));
        return '';
    }

    transformReact(){
        this.compiler();
        // return `
        // import React from 'react';
        // import {ISvgIconProps, SvgIconWrapper} from '../components';
        // export default SvgIconWrapper(
        //     ${this.name},
        //     false,
        //     (props: ISvgIconProps) => (
        //         ${this.compiler()}
        //     )
        // );
        // `
    }
    transformVue(){

    }
    transformVue3(){

    }
    transformSvg(){

    }
}