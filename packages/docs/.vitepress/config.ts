import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import markdownTodo from 'markdown-it-todo'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sword Design",
  lang: 'zh-CN',
  description: "前端组件库",
  appearance: false,
  base: "/sword-design/",
  themeConfig: {
    nav: [
      { text: "开始使用", link: "/guide/get-started",activeMatch: '/guide/' },
      { text: "组件", link: "/components/button",activeMatch: '/components/' },
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      '/guide/':[
        {
          text: "开发指南",
          collapsed: false,
          items: [
            { text: "快速上手", link: "/guide/get-started" },
            { text: "更新日志", link: "/guide/update" },
            { text: "更新计划", link: "/guide/plan" }
          ],
        },
        {
          text: "Sword Design Pro 最佳实践",
          collapsed: false,
          items: [
            { text: "说明", link: "/guide/pro/index" },
            { text: "完成进度", link: "/guide/pro/process" },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          collapsed: false,
          items: [
            { text: "Button 按钮", link: "/components/button" },
            { text: "Collapse 折叠面板", link: "/components/collapse" },
            { text: "Dropdown 下拉菜单", link: "/components/dropdown" },
          ],
        },
        {
          text: "反馈组件",
          collapsed: false,
          items: [
            { text: "Alert 提示", link: "/components/alert" },
            { text: "Loading 加载", link: "/components/loading" },
            { text: "Message 消息提示", link: "/components/message" },
            { text: "MessageBox 消息弹出框", link: "/components/messagebox" },
            { text: "Notification 通知", link: "/components/notification" },
            { text: "Popconfirm 气泡确认框", link: "/components/popconfirm" },
            { text: "Tooltip 文字提示", link: "/components/tooltip" },
          ],
        },
        {
          text: "表单组件",
          collapsed: false,
          items: [{ text: "Form 表单", link: "/components/form" }],
        },
      ]

    },
    socialLinks: [
      { icon: "github", link: "https://github.com/swdwiki/sword-design" },
    ],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
      md.use(markdownTodo);
    },
  },
});
