---
---

# 开始使用

## 安装 

```bash
# react
npm install okey-icon-react

# vue
npm install okey-icon-vue

```


## 使用

```tsx

import React, { useState } from 'react';
import { Setting } from 'okey-icon-react'
import "okey-icon-react/styles/index.css"

export default () => {
  const [size, setSize] = useState(32);
  return <>
    <div><Setting fill="#27CFFF" size={size} theme="outline"/></div>
    <div><Setting size={size} spin theme="filled"/></div>

    <button onClick={ () => setSize(size + 1)} > 增大size </button>
    <button onClick={ () => setSize(size - 1 === 16 ? 16 : size - 1)} > 减小size </button>
  </>
}
```

React 中组件中引入

```tsx | pure
import React, { useState } from 'react';
import { Setting } from 'okey-icon-react';
import "okey-icon-react/styles/index.css";

<Setting fill="#27CFFF" spin size={32} theme="outline"/>
```

使图标旋转
```tsx | pure
import React, { useState } from 'react';
import { Setting } from 'okey-icon-react';
  
<Setting fill="#27CFFF" size={32} theme="outline"/>
```

## API

<Alert type="info">
  与 <a href="https://iconpark.oceanengine.com/">IconPark</a> 参数一致
</Alert>

|   参数   |   描述   |   类型   |   默认值   |
| ---- | ---- | ---- | ---- |
| size | svg大小 |   number   |   1em   |
|   theme   |   主题   |   outline \| filled \| two-tone \| multi-color   |   outline   |
|   fill   |   填充颜色   |   可选 string \| string[]   |   #333   |
|   strokeWidth   |   描边宽度   |   string   |   4   |
|   strokeLinejoin   |   描边连接线类型   |   miter \| round \| bevel   |   round   |
|   strokeLinecap   |   描边端点类型   |   butt \| round \| square   |   round   |
|   spin   |   旋转   |   boolean   |   false   |
