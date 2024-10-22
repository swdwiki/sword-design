<script lang="ts" setup>
import { ref, computed } from "vue";
import { addUnit } from "@swd-design/utils";
import type { PopconfirmProps, PopconfirmEmits } from "./types";
import { useLocale } from "@swd-design/hooks";
import type { TooltipInstance } from "../Tooltip";

import SwdButton from "../Button/Button.vue";
import SwdIcon from "../Icon/Icon.vue";
import SwdTooltip from "../Tooltip/Tooltip.vue";

defineOptions({
  name: "SwdPopconfirm",
});

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: "",
  confirmButtonType: "primary",
  icon: "question-circle",
  iconColor: "#f90",
  hideAfter: 200,
  width: 150,
});

const emits = defineEmits<PopconfirmEmits>();
const tooltipRef = ref<TooltipInstance>();
const style = computed(() => ({ width: addUnit(props.width) }));

const { t } = useLocale();

function hidePopper() {
  tooltipRef.value?.hide();
}

function confirm(e: MouseEvent) {
  emits("confirm", e);
  hidePopper();
}

function cancel(e: MouseEvent) {
  emits("cancel", e);
  hidePopper();
}
</script>

<template>
  <swd-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="swd-popconfirm" :style="style">
        <div class="swd-popconfirm__main">
          <swd-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
        <div class="swd-popconfirm__action">
          <swd-button
            size="small"
            class="swd-popconfirm__cancel"
            :type="cancelButtonType"
            @click="cancel"
          >
            {{ cancelButtonText || t("popconfirm.cancelButtonText") }}
          </swd-button>
          <swd-button
            size="small"
            class="swd-popconfirm__confirm"
            :type="confirmButtonType"
            @click="confirm"
          >
            {{ confirmButtonText || t("popconfirm.confirmButtonText") }}
          </swd-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #default>
      <slot name="reference"></slot>
    </template>
  </swd-tooltip>
</template>

<style scoped>
@import "./style.css";
</style>
