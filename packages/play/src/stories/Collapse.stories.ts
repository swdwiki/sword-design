import type { Meta, StoryObj } from "@storybook/vue3";
import { SwdCollapse, SwdCollapseItem } from "swd-design";
import 'swd-design/dist/theme/Collapse.css'

type Story = StoryObj<typeof SwdCollapse>;

const meta: Meta<typeof SwdCollapse> = {
  title: "Example/Collapse",
  component: SwdCollapse,
  subcomponents: { SwdCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      SwdCollapse,
      SwdCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <swd-collapse v-bind="args">
      <swd-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </swd-collapse-item>
      <swd-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </swd-collapse-item>
      <swd-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </swd-collapse-item>
    </swd-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;
