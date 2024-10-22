import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { withInstall } from "@swd-design/utils";

export const SwdButton = withInstall(Button);
export const SwdButtonGroup = withInstall(ButtonGroup);

export * from "./types";
