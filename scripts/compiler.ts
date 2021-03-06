/**
 * @file 将source文件下的svg照片、转为.tsx、.vue中
*/
import fs, { writeFileSync } from 'fs';
import path from 'path';
import consola from 'consola';
import { promisify } from 'util';
import { transforms, name2humps } from './utils'

// 1. 先检验source中svg 是否有重复名称的、svg名称是否合规(由字母组成允许有_、-等)、如果都OK进入第二步
// 2. 将source中svg文件名称与react、vue等目录中的svg图片的tsx文件 进行比对没有则生成、有则跳过

const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const SvgIconAll: Record<string , [string, string]> = {};

type PackageName = 'react' | 'vue' | 'vue-next'
const packageName = ['react', 'vue'] as PackageName[];


const validtorSvgIconName = async (): Promise<boolean> => {
    const sourceDir = path.resolve(__dirname, '../source')
    const svgFileOrDirList = await readDir(sourceDir);

    const validSvgName = (name: string, basepath: string) => {
        if(path.extname(name) === ".svg"){
            const bname = path.basename(name,'.svg');
            const svgPath = path.resolve(basepath,name);
            if(SvgIconAll[bname.toLocaleLowerCase()]){ // 全部转为小写
                consola.error("存在重复图标名称 ",svgPath);
                return false;
            }
            // 判断名称是否正确
            if (path.extname(name) !== '.svg') {
                consola.error(`${name}非svg图标： ${svgPath}`);
                return false;
            }
            SvgIconAll[bname] = [svgPath, fs.readFileSync(svgPath, 'utf8')];
            return true;
        }
        return true;
    } 

    return new Promise((resolve) => {
        svgFileOrDirList.forEach(fileOrDir => {
            const fileOrDirPath = path.resolve(sourceDir,fileOrDir);
            if(fs.statSync(fileOrDirPath).isDirectory()){
                const svgFileList = fs.readdirSync(fileOrDirPath);
                svgFileList.forEach(file => {
                    const result = validSvgName(file,fileOrDirPath);
                    !result && resolve(result);
                })
            }
            const result = validSvgName(fileOrDir,sourceDir);
            !result && resolve(result);
            if(svgFileOrDirList[svgFileOrDirList.length - 1] === fileOrDir){
                resolve(true)
            }
        })
    })
}

// 将svg转为tsx
const converter = async (name: PackageName) => {
    try{
        const assetsPaths = path.resolve('packages',name,'src/assets/');
        const indexPaths = path.resolve('packages',name, 'src/index.ts');
        const svgTsxList = await (await readDir(assetsPaths)).reduce((prev, cur: string) => {
            prev[name2humps(path.basename(cur,'.tsx')).toLocaleLowerCase()] = true;
            return prev;
        }, {} as Record<string, boolean>);
        Object.keys(SvgIconAll).forEach(async (file, index) => {
            const filename = name2humps(file)
            if(!svgTsxList[filename.toLocaleLowerCase()]){
                consola.info(`开始编译${name}Svg : ${filename}`);
                const svgString = SvgIconAll[file][1];
                const svgContent = transforms[`${name}`](svgString, file);
                const targetPath = path.format({
                    dir: assetsPaths,
                    name: filename,
                    ext: '.tsx'
                });
                writeFileSync(targetPath, svgContent, 'utf-8');
                writeFileSync(indexPaths, `\nexport {default as ${filename}} from './assets/${filename}';`, { flag: 'a+',encoding:'utf-8' });
                consola.success(`编译 ${name} ${filename}Icon Success, Path: ${targetPath}`);
            }
        })
    }catch(err) {
        consola.error(err);
    }
}

async function createIconJson() {
    const createPath = path.resolve(__dirname, '../source/all-icon.json');
    const configPath = path.resolve(__dirname, '../source/config.json')
    const iconConfig = await readFile(configPath,'utf-8');
    const iconJson = JSON.parse(iconConfig);
    const configJson = Object.keys(SvgIconAll).map((fileName,index) => {
        return {
            id: index,
            name: fileName,
            title: iconJson[fileName],
            componentName: name2humps(fileName),
            svg: SvgIconAll[fileName][1],
        }
    })
    await writeFile(createPath, JSON.stringify(configJson, undefined ,2) ,'utf-8');
    consola.success("已生成icons.json");
}

async function compiler () {
    const valid = await validtorSvgIconName();
    await createIconJson();
    if(valid){
        packageName.forEach(async p => {
            await converter(p);
            consola.success(`${p} Svg组件编译结束`);
        })
    }
}

compiler();