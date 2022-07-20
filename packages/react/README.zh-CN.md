# Okey-Icon

[英文](./README.zh-CN.md)

## 安装

```bash
npm install okey-icon-react

```


## 使用

React 中组件中引入

```tsx
import React, { useState } from 'react';
import { Setting } from 'okey-icon-react';
import "okey-icon-react/styles/index.css";

<Setting fill="#27CFFF" spin size={32} theme="outline"/>
```

使图标旋转
```tsx
import React, { useState } from 'react';
import { Setting } from 'okey-icon-react';
  
<Setting fill="#27CFFF" size={32} theme="outline"/>
```

## API


  与 [IconPark](https://iconpark.oceanengine.com/)参数一致

|   参数   |   描述   |   类型   |   默认值   |
| ---- | ---- | ---- | ---- |
| size | svg大小 |   number   |   1em   |
|   theme   |   主题   |   outline \| filled \| two-tone \| multi-color   |   outline   |
|   fill   |   填充颜色   |   可选 string \| string[]   |   #333   |
|   strokeWidth   |   描边宽度   |   string   |   4   |
|   strokeLinejoin   |   描边连接线类型   |   miter \| round \| bevel   |   round   |
|   strokeLinecap   |   描边端点类型   |   butt \| round \| square   |   round   |
|   spin   |   旋转   |   boolean   |   false   |
