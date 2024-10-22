import Select from "./Select.vue";
import Option from "./Option.vue";
import { withInstall } from "@swd-design/utils";

export const SwdSelect = withInstall(Select);
export const SwdOption = withInstall(Option);

export * from "./types";
