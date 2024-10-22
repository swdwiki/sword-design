import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
import { withInstall } from "@swd-design/utils";

export const SwdDropdown = withInstall(Dropdown);
export const SwdDropdownItem = withInstall(DropdownItem);

export * from "./types";
