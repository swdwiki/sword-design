<script setup lang="ts">
import { h } from "vue";
import { SwdNotification } from "swd-design";

function openNotify1() {
  SwdNotification({
    title: "Title",
    message: h("i", { style: "color:teal" }, "This is a remider"),
    position:'bottom-right'
  });
}

function openNotify2() {
  SwdNotification({
    title: "Prompt",
    message: "This is a message that does not auto close",
    duration: 0,
    position:'top-left'
  });
}
</script>

<template>
  <swd-button @click="openNotify1" plain>Closes automatically</swd-button>
  <swd-button @click="openNotify2" plain>Won't closes automatically</swd-button>
</template>
