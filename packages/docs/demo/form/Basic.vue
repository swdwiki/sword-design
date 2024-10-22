<script lang="ts" setup>
import { reactive, ref } from "vue";
import { SwdMessage } from "swd-design";

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  desc: "",
});

const options = ref([
  { value: "beijing", label: "Zone One" },
  { value: "shanghai", label: "Zone Two" },
]);

const onSubmit = () => {
  SwdMessage.success("submit!");
};
</script>

<template>
  <swd-form :model="form">
    <swd-form-item label="Activity name">
      <swd-input v-model="form.name" />
    </swd-form-item>
    <swd-form-item label="Activity zone">
      <swd-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </swd-form-item>
    <swd-form-item label="Instant delivery">
      <swd-switch v-model="form.delivery" />
    </swd-form-item>
    <swd-form-item label="Activity form">
      <swd-input v-model="form.desc" type="textarea" />
    </swd-form-item>
    <swd-form-item>
      <swd-button type="primary" @click="onSubmit">Create</swd-button>
      <swd-button>Cancel</swd-button>
    </swd-form-item>
  </swd-form>
</template>
