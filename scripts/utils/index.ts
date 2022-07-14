import svgr from '@svgr/core';
import { optimize,OptimizeOptions } from 'svgo'
import prettier from 'prettier'; // 优化svg代码格式
import { SvgoPlugins, firstTitleCase } from './tools'
import { SvgParser } from './SvgParser';
export * from './tools'

async function svgTransformVue(content: string) {
    console.log("content Vue: ",content);
    return '';
}

async function svgTransformReact(content: string, name: string){
    const Parser = new SvgParser(content,name);
    const svgStr = Parser.transformReact();
    console.log('--------------------', svgStr);

    return content;
}


export const transforms = {
    vue: svgTransformVue,
    react: svgTransformReact
} as {
    [key : string]: (content: string, name?: string) => Promise<string>
}
