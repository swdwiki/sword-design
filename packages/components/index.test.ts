import type { Plugin } from "vue";
import { describe, it, expect } from "vitest";
import {
  SwdAlert,
  SwdButton,
  SwdButtonGroup,
  SwdCollapse,
  SwdCollapseItem,
  SwdDropdown,
  SwdDropdownItem,
  SwdForm,
  SwdFormItem,
  SwdIcon,
  SwdInput,
  SwdLoading,
  SwdLoadingDirective,
  SwdLoadingService,
  SwdMessage,
  SwdMessageBox,
  SwdNotification,
  SwdOption,
  SwdPopconfirm,
  SwdSelect,
  SwdSwitch,
  SwdTooltip,
  SwdUpload,
} from "./index";
import { map, get } from "lodash-es";

const components = [
  SwdButton,
  SwdButtonGroup,
  SwdCollapse,
  SwdCollapseItem,
  SwdIcon,
  SwdDropdown,
  SwdDropdownItem,
  SwdTooltip,
  SwdMessage,
  SwdInput,
  SwdSwitch,
  SwdSelect,
  SwdOption,
  SwdForm,
  SwdFormItem,
  SwdAlert,
  SwdNotification,
  SwdLoading,
  SwdUpload,
  SwdPopconfirm,
  SwdMessageBox,
] as Plugin[];

describe("components/index.ts", () => {
  it.each(map(components, (c) => [get(c, "name") ?? "", c]))("%s should be exported", (_, component) => {
    expect(component).toBeDefined();
    expect(component.install).toBeDefined()
  });

  it('SwdLoadingService and SwdLoadingDirective should be exported',()=>{
    expect(SwdLoadingService).toBeDefined()
    expect(SwdLoadingDirective).toBeDefined()
  })
});
