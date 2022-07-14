import prettier from 'prettier'; // 优化svg代码格式
import { SvgParser } from './SvgParser';
export * from './tools'

function svgTransform (type: 'vue' | 'react') {
    return (content: string, name: string) => {
        const Parser = new SvgParser(content,name);
        const svgStr = Parser.transform(type);
        const formattedCode = prettier.format(svgStr, {
            parser: 'babel',
            printWidth: 120,
            tabWidth: 4,
            bracketSpacing: true,
            singleQuote: true,
            semi: true
        });
        return formattedCode;
    }
}


export const transforms = {
    vue: svgTransform('vue'),
    react: svgTransform('react')
} as {
    [key : string]: (content: string, name: string) => string
}
