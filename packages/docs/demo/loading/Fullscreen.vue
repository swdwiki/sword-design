<script setup>
import { ref } from "vue";
import { SwdLoading } from "swd-design";

const loading = ref(false);

function openLoading1() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}

function openLoading2() {
  const _loading = SwdLoading.service({
    lock: true,
    spinner: "circle-notch",
    text: "加载中...",
    background: "rgba(255,255,255,0.5)",
    type:'horizontal'
  });
  setTimeout(() => {
    _loading.close();
  }, 2000);
}
</script>

<template>
  <swd-button
    v-loading.fullscreen.lock="loading"
    type="primary"
    @click="openLoading1"
  >
    As a directive
  </swd-button>
  <swd-button type="primary" @click="openLoading2"> As a service </swd-button>
</template>
