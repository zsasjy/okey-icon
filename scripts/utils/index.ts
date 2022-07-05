import prettier from 'prettier'; // 优化svg代码格式
export * from './tools'

function svgTransformVue(content: string): string{
    console.log("content Vue: ",content);
    return '';
}

function svgTransformReact(content: string): string{
    // console.log("content React: ",content);
    return content;
}


export const transform = {
    vue: svgTransformVue,
    react: svgTransformReact
} as {
    [key : string]: (content: string) => string
}
