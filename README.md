# svg图标库
- 参考iconpark属性、图标、打包方式等


## 预期

packages/react 生成react、svg图标
packages/vue 生成vue、svg图标
source 将原svg图标放置该文件

## 使用

` npm run compile ` 用于编译source文件下新增的svg图标生成react、vue相关组件

` npm run build ` 打包各个包

` npm run start ` 显示站点

## 发包
修改前先使用 npm run [changeset](https://github.com/changesets/changesets) 生成需要发版的包与对应类型 major、minor、patch