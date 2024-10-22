<script lang="ts" setup>
import { reactive, ref } from "vue";
import { SwdMessage, type FormInstance } from "swd-design";

const formRef = ref<FormInstance>();
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

const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
});

const onSubmit = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      SwdMessage.success("submit!");
    }
  });
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <swd-form ref="formRef" :model="form" :rules="rules">
    <swd-form-item label="Activity name" prop="name">
      <swd-input v-model="form.name" />
    </swd-form-item>
    <swd-form-item label="Activity zone" prop="region">
      <swd-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </swd-form-item>
    <swd-form-item label="Instant delivery" prop="delivery">
      <swd-switch v-model="form.delivery" />
    </swd-form-item>
    <swd-form-item label="Activity form" prop="desc">
      <swd-input v-model="form.desc" type="textarea" />
    </swd-form-item>
    <swd-form-item>
      <swd-button type="primary" @click="onSubmit">Create</swd-button>
      <swd-button @click="onReset">Reset</swd-button>
    </swd-form-item>
  </swd-form>
</template>
