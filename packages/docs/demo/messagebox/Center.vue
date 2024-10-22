<script setup lang="ts">
import { SwdMessage, SwdMessageBox } from "swd-design";

function openMsgBox() {
  SwdMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      type: "warning",
      center: true,
      // 这里展示一下 不用 Promise 写法的时候
      callback(action) {
        if (action === "confirm") {
          SwdMessage.info(action);
        } else {
          SwdMessage.warning(action as string);
        }
      },
    }
  );
}
</script>

<template>
  <swd-button @click="openMsgBox" plain>Click to open Message Box</swd-button>
</template>
