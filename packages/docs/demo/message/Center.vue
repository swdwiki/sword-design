<script lang="ts" setup>
import { SwdMessage } from "swd-design";

const openCenter = () => {
  SwdMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <swd-button plain @click="openCenter">Centered text</swd-button>
</template>
