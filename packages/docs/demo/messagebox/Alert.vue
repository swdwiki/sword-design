<script setup lang="ts">
import { SwdMessageBox, SwdMessage } from "swd-design";

function openAlert() {
  SwdMessageBox.alert("This is a message", "Title")
    .then((action) => {
      SwdMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      SwdMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <swd-button @click="openAlert" plain> Click to open the Alert</swd-button>
</template>
