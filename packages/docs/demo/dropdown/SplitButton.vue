<script setup lang="ts">
import { type DropdownItemProps, SwdMessage } from "swd-design";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
  SwdMessage.info("button click");
}
</script>

<template>
  <div class="row">
    <swd-dropdown :items="items">
      <swd-button type="primary">
        Dropdown List
        <swd-icon icon="angle-down" style="margin-left: 8px" />
      </swd-button>
    </swd-dropdown>
    <swd-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </swd-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
