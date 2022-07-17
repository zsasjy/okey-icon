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

import React from 'react';
import { Avatar } from 'okey-icon-react'

export default () => <Avatar size={32} style={{ verticalAlign: 'middle'}} theme="outline"/>
```

## API

<Alert type="info">
  与IconPark参数一致
</Alert>

|   参数   |   描述   |   类型   |   默认值   |
| ---- | ---- | ---- | ---- |
| size | svg大小 |   number   |   1em   |
|   theme   |   主题   |   outline \| filled \| two-tone \| multi-color   |   outline   |
|   fill   |   填充颜色   |   可选 string \| string[]   |   #333   |
|   strokeWidth   |   描边宽度   |   string   |   4   |
|   strokeLinejoin   |   描边连接线类型   |   miter \| round \| bevel   |   round   |
|   strokeLinecap   |   描边端点类型   |   butt \| round \| square   |   round   |
