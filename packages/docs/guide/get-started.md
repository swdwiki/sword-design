---
search: false
next:
  link: /components/button
  text: Button 按钮
---

# 快速上手

跟随以下的步骤，快速上手组件库的使用。

::: tip
Vue 版本
vue >= 3.2.0

注意：由于 Vue3 不再支持 IE 浏览器环境，SwdUI 也不支持 IE 浏览器环境。
:::

## 安装

```bash
npm i @swd-design --save


# npm
npm install --save-dev @swd-design
# yarn
yarn add --dev @swd-design
# pnpm
pnpm add --dev @swd-design
```

## 完整引入

```js
// 引入所有组件
import SwdUI from "swd-design";
// 引入样式
import "swd-design/dist/style.css";

import App from "./App.vue";
// 全局使用
createApp(App).use(SwdUI).mount("#app");
```

```vue
<template>
  <swd-button>按钮</swd-button>
</template>
```

**按需加载**

SwdUI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <swd-button>按钮</swd-button>
</template>
<script>
import { SwdButton } from "swd-design";
export default {
  components: { SwdButton },
};
</script>
```
