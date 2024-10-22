<script setup>
import { SwdMessage } from "swd-design";
function handleBtnClick() {
  SwdMessage.info("btn click");
}
</script>

<template>
  <p>
    <swd-button @click="handleBtnClick"> with throttle</swd-button>
    <swd-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</swd-button
    >
  </p>
</template>
