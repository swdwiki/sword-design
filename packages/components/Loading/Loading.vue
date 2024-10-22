<script setup lang="ts">
import type { LoadingOptions } from "./types";
import { computed, type Ref } from "vue";
import { isString } from "lodash-es";
import SwdIcon from "../Icon/Icon.vue";

defineOptions({
  name: "SwdLoading",
  inheritAttrs: false,
});
const props = defineProps<LoadingOptions>();

const iconName = computed(() => {
  if (isString(props.spinner)) {
    return props.spinner;
  }
  return "spinner"; // 'circle-notch' 也很好看
});

const typeName = computed(() => {
  if (isString(props.type)) {
    return props.type;
  }
  return "circle";
});

const showTextOption = computed(() => {
  if (props.showtext !== undefined) {
    return props.showtext
  }
  return true
})
</script>

<template>
  <transition name="fade-in-linear" @after-leave="onAfterLeave" v-if="typeName === 'circle'">
    <div v-show="(props.visible as Ref).value" class="swd-loading swd-loading__mask"
      :class="{ 'is-fullscreen': fullscreen }">
      <div class="swd-loading__spinner">
        <swd-icon v-if="props.spinner !== false" :icon="iconName" spin />
        <p v-if="showTextOption" class="swd-loading-text">{{ text || '加载中...' }}</p>
      </div>
    </div>
  </transition>
  <transition name="fade-in-linear" @after-leave="onAfterLeave" v-else-if="typeName === 'horizontal'">
    <div v-show="(props.visible as Ref).value" class="swd-loading swd-loading__mask"
      :class="{ 'is-fullscreen': fullscreen }">
      <div class="horizontal-loading">
        <div class="space-x-2 horizontal-loading_items">
          <div class="loading-item animate-loading" :style="{ 'animation-delay': 0.2 * index + 's' }" v-for="index in 6"
            :key="index"></div>
        </div>
        <p v-if="showTextOption" class="swd-loading-text">{{ text || '加载中...' }}</p>
      </div>
    </div>
  </transition>
</template>

<style>
@import "./style.css";

.swd-loading {
  --swd-loading-bg-color: v-bind(background) !important;
  --swd-loading-z-index: v-bind(zIndex) !important;
}

.horizontal-loading {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.horizontal-loading_items {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.space-x-2> :not([hidden])~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem
      /* 8px */
      * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem
      /* 8px */
      * calc(1 - var(--tw-space-x-reverse)));
}

@keyframes loading {

  0%,
  100% {
    transform: scale(0.5);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-loading {
  animation: loading 1.5s infinite ease-in-out;
}

.loading-item {
  width: 16px;
  height: 16px;
  background-color: var(--swd-loading-icon-color);
  border-radius: 50%;
}
</style>
