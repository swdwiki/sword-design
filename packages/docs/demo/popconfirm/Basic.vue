<script setup lang="ts">
import { ja, ko, en, zhCn, zhTw, SwdConfigProvider } from "swd-design";
import { get } from "lodash-es";

import { computed, ref } from "vue";

const language = ref("");
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const;
const locale = computed(() => get(langMap, language.value));
const changelang = () => {
  const l = ["zhCn", "zhTw", "ko", "en", "ja"];
  language.value = l[(l.indexOf(language.value) + 1) % l.length];
};
</script>
<template>
  <swd-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</swd-button
  >
  <swd-config-provider :locale="locale">
    <swd-popconfirm title="Are you shure to delete this item?">
      <swd-button>Delete</swd-button>
    </swd-popconfirm>
  </swd-config-provider>
</template>
