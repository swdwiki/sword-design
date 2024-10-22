<script setup lang="ts">
import type { DropdownItemProps, DropdownInstance } from "swd-design";
import { ref } from "vue";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
const dropdownRef = ref<DropdownInstance>();
</script>

<template>
  <swd-button @click="() => dropdownRef?.open()">open</swd-button>
  <swd-button @click="() => dropdownRef?.close()">close</swd-button>
  <br />
  <swd-dropdown ref="dropdownRef" :items="items">
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
  margin-top: 20px;
  i {
    margin-left: 8px;
  }
}
</style>
