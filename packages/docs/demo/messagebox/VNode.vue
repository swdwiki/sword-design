<script setup lang="ts">
import { h, ref } from "vue";
import { SwdMessageBox, SwdSwitch, type SwitchValueType } from "swd-design";

function open1() {
  SwdMessageBox({
    title: "Message",
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
}

function open2() {
  const checked = ref<SwitchValueType>(false);
  SwdMessageBox({
    title: "Message",
    message: () =>
      h(SwdSwitch, {
        modelValue: checked.value,
        "onUpdate:modelValue": (val: SwitchValueType) => {
          checked.value = val;
        },
      }),
  });
}
</script>

<template>
  <swd-button @click="open1" plain>Common VNode</swd-button>
  <swd-button @click="open2" plain>Dynamic props</swd-button>
</template>
