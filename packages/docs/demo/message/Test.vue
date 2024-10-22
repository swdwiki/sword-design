<script lang="ts" setup>
import { SwdMessage } from "swd-design";

const open1 = () => {
  SwdMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open2 = () => {
  SwdMessage.success("Congrats, this is a success message.");
};
</script>
<template>
  <div>
    <swd-button @click="open1">插件式调用</swd-button>
    <swd-button @click="open2">函数式调用</swd-button>
    <swd-button @click="$message.success('Congrats, this is a success message.')"
      >全局方法调用</swd-button
    >
  </div>
</template>
