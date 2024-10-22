<script setup lang="ts">
import {
  type DropdownItemProps,
  type DropdownCommand,
  SwdMessage,
} from "swd-design";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleCommand(command: DropdownCommand) {
  SwdMessage.info("click on item " + command);
}
</script>

<template>
  <swd-dropdown :items="items" @command="handleCommand">
    <span class="dropdown-link">
      Dropdown List
      <swd-icon icon="angle-down" />
    </span>
  </swd-dropdown>
</template>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--swd-color-primary);

  i {
    margin-left: 8px;
  }
}
</style>
