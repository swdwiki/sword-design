<script lang="ts" setup>
import { h } from "vue";
import { SwdMessage } from "swd-design";

const open = () => {
  SwdMessage("This is a message.");
};

const openVn = () => {
  SwdMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>

<template>
  <swd-button :plain="true" @click="open">Show message</swd-button>
  <swd-button :plain="true" @click="openVn">VNode</swd-button>
</template>
