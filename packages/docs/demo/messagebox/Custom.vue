<script setup lang="ts">
import { h } from "vue";
import { SwdMessage, SwdMessageBox } from "swd-design";
import { delay } from "lodash-es";

async function openMsgBox() {
  try {
    const action = await SwdMessageBox({
      title: "Message",
      message: h("p", null, [
        h("span", null, "Message can be "),
        h("i", { style: "color: teal" }, "VNode"),
      ]),
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      type: "danger",
      icon: "trash",
      beforeClose(action, instance, done) {
        if (action !== "confirm") {
          done();
          return;
        }

        instance.confirmButtonLoading = true;
        instance.confirmButtonText = "Loading...";
        delay(() => {
          done();
          delay(() => (instance.confirmButtonLoading = false), 1000);
        }, 3000);
      },
    });

    SwdMessage.info(`action : ${action}`);
  } catch (action) {
    SwdMessage.warning(`action : ${action}`);
  }
}
</script>

<template>
  <swd-button @click="openMsgBox" plain>Click to open Message Box</swd-button>
</template>
