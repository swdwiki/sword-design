import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import { withInstall } from "@swd-design/utils";

export const SwdForm = withInstall(Form);
export const SwdFormItem = withInstall(FormItem);

export * from "./types";
export * from "./hooks";
