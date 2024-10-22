<script setup lang="ts">
import { SwdMessageBox, SwdMessage } from "swd-design";

function openConfirm() {
  SwdMessageBox.prompt("Place input your name", "Tip", { type: "info" })
    .then(({ value }) => {
      SwdMessage.info(`your name is: ${value}`);
    })
    .catch((action) => {
      SwdMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <swd-button @click="openConfirm" plain> Click to open the Confirm</swd-button>
</template>
