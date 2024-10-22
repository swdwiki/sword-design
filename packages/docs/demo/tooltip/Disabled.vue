<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <swd-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <swd-button @click="disabled = !disabled"
      >click to {{ disabled ? "active" : "close" }} tooltip function</swd-button
    >
  </swd-tooltip>
</template>
