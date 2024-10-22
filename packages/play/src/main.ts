import { createApp } from "vue";
import App from "./App.vue";
import SwdUI from "swd-design";

import "swd-design/dist/index.css";

const app = createApp(App);
app.use(SwdUI);
app.mount("#app");
