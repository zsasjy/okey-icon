/**
 * @file 将source文件下的svg照片、转为.tsx、.vue中
*/
import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import consola from 'consola';
import chalk from 'chalk';
import { promisify } from 'util'
// 1. 先检验source中svg 是否有重复名称的、svg名称是否合规(由字母组成允许有_、-等)、如果都OK进入第二步
// 2. 将source中svg文件名称与react、vue等目录中的svg图片的tsx文件 进行比对没有则生成、有则跳过

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);

const validtorSvgIconName = async () => {
    const SvgIconAll: Record<string , string> = {};
    const sourceDir = path.resolve(__dirname, '../source')
    const svgFileOrDirList = await readDir(sourceDir);

    const validSvgName = (name: string, basepath: string):Boolean => {
        if(path.extname(name) === ".svg"){
            const bname = path.basename(name,'.svg');
            const svgPath = path.resolve(basepath,name);
            if(SvgIconAll[bname.toLocaleLowerCase()]){ // 全部转为小写
                consola.error("存在重复图标名称 ",svgPath);
                return false;
            }
            // 判断名称是否正确
            if(!(/^([a-z]+)(-|_)?([a-z]+)$/.test(bname))) {
                consola.error(`${name}文件名称建议使用小字母 ${svgPath}`);
                return false;
            }
            SvgIconAll[bname] = svgPath
        }
        return true;
    } 

    return new Promise((resolve) => {
        svgFileOrDirList.forEach(async fileOrDir => {
            const fileOrDirPath = path.resolve(sourceDir,fileOrDir);
            if(fs.statSync(fileOrDirPath).isDirectory()){
                const svgFileList = await readDir(fileOrDirPath);
                svgFileList.forEach(file => {
                    if(!validSvgName(file,fileOrDirPath)){
                        resolve(false);
                    }
                })
            }
            if(!validSvgName(fileOrDir,sourceDir)){
                resolve(false);
            }
            if(svgFileOrDirList[svgFileOrDirList.length - 1] === fileOrDir){
                resolve(true)
            }
        })
    })
}

// 校验通过
validtorSvgIconName().then(res => {
    console.log("res : ",res);
})
