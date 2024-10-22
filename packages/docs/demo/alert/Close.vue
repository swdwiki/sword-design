<script setup>
import { SwdMessage } from "swd-design";

function handleClose() {
  SwdMessage.info("close callback");
}
</script>
<template>
  <div class="basic block">
    <swd-alert title="Unclosable alert" type="success" :closable="false" />
    <swd-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
