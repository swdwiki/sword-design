import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import SwdUI, { zhCn } from "swd-design";
import { ElementPlusContainer } from "@vitepress-preview/component";

import "@vitepress-preview/component/style.css";
import "swd-design/dist/index.css";
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(SwdUI, { locale: zhCn });
  },
};
