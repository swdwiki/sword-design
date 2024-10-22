<script setup lang="ts">
import { SwdMessageBox, SwdMessage } from "swd-design";

function openConfirm() {
  SwdMessageBox.confirm("proxy will permanently delete the file. Continue?", "Warning", { type: "warning" })
    .then((action) => {
      SwdMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      SwdMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <swd-button @click="openConfirm" plain> Click to open the Confirm</swd-button>
</template>
