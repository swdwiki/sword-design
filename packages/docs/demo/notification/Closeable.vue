<script lang="ts" setup>
import {SwdNotification} from 'swd-design'

const open = () => {
  SwdNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>

<template>
  <swd-button plain @click="open"> Hide close button </swd-button>
</template>