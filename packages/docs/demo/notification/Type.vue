<script lang="ts" setup>
import { SwdNotification } from "swd-design";

const open1 = () => {
  SwdNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};

const open2 = () => {
  SwdNotification({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
  });
};

const open3 = () => {
  SwdNotification({
    title: "Info",
    message: "This is an info message",
    type: "info",
  });
};

const open4 = () => {
  SwdNotification({
    title: "Error",
    message: "This is an error message",
    type: "danger",
  });
};
</script>

<template>
  <swd-button plain @click="open1"> Success </swd-button>
  <swd-button plain @click="open2"> Warning </swd-button>
  <swd-button plain @click="open3"> Info </swd-button>
  <swd-button plain @click="open4"> Error </swd-button>
</template>
