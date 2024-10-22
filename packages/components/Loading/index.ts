import { vLoading } from "./directive";
import { Loading } from "./service";

import type { App } from "vue";

export const SwdLoading = {
  name:'SwdLoading',
  install(app: App) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading,
};

export default SwdLoading;

export {
  vLoading,
  vLoading as SwdLoadingDirective,
  Loading as SwdLoadingService,
};

export * from "./types";
