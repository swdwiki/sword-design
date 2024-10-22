<script lang="ts" setup>
import { SwdMessage } from "swd-design";

const open1 = () => {
  SwdMessage("This is a message.");
};
const open2 = () => {
  SwdMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  SwdMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  SwdMessage.error("Oops, this is a error message.");
};
</script>

<template>
  <swd-button :plain="true" @click="open2">Success</swd-button>
  <swd-button :plain="true" @click="open3">Warning</swd-button>
  <swd-button :plain="true" @click="open1">Message</swd-button>
  <swd-button :plain="true" @click="open4">Error</swd-button>
</template>
