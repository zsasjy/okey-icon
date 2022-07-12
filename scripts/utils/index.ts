import svgr from '@svgr/core';
import { optimize,OptimizeOptions } from 'svgo'
import prettier from 'prettier'; // 优化svg代码格式
import { SvgoPlugins } from './tools'
export * from './tools'

async function svgTransformVue(content: string) {
    console.log("content Vue: ",content);
    return '';
}

async function svgTransformReact(content: string){
    // console.log("content React: ",content);
    const result = optimize(content,SvgoPlugins as OptimizeOptions);
    console.log(result);
    // console.log(svgr.transform((result as any).data))
    // const jsxCode = await transform (result.data, {
    //     plugins: ['@svgr/plugin-jsx'],
    // });
    return content;
}


export const transform = {
    vue: svgTransformVue,
    react: svgTransformReact
} as {
    [key : string]: (content: string) => Promise<string>
}
