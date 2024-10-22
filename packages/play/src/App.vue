<script setup lang="ts">
import { ref, h, reactive } from "vue";
import {
  SwdMessage,
  SwdNotification,
  SwdMessageBox,
  type RenderLabelFunc,
  // type ButtonType,
} from "swd-design";

const openVal = ref(["a"]);
const loading = ref(false);
const dropdownOptions = ref([
  {
    label: "Option A",
    // name: 'a'
  },
  {
    label: "Option B",
    // name: 'b'
  },
  {
    label: "Option C",
    // name: 'c',
    divided: true,
  },
]);
const switchValue = ref(true);
const inputValue = ref("");
const selectValue = ref("");
const selectOptions = ref([
  {
    label: "Option A",
    value: "a",
  },
  {
    label: "Option B",
    value: "b",
  },
  {
    label: "Option C",
    value: "c",
    disabled: true,
  },
]);
const customOptionRender: RenderLabelFunc = (opt) => {
  return h("div", null, [
    h("b", { style: { color: "red" } }, opt.label),
    h("span", null, `~${opt.value}`),
  ]);
};

const formRef = ref();
const formData = reactive({
  email: "123",
  password: "",
  confirmPwd: "",
});
const formRules: any = {
  email: [{ type: "email", required: true, trigger: "blur" }],
  password: [
    { type: "string", required: true, trigger: "blur", min: 3, max: 5 },
  ],
  confirmPwd: [
    { type: "string", required: true, trigger: "blur" },
    {
      validator: (_: typeof formRules, value: string) =>
        value === formData.password,
      trigger: "blur",
      message: "两个密码必须相同",
    },
  ],
};

function handleBtnClick() {
  SwdMessage.info("Button Click");
}

function handleNotify() {
  SwdNotification({
    title: "Title",
    message: "Message",
    type: "success",
  });
}

setInterval(() => {
  loading.value = !loading.value;
  // let loadingHandle = SwdLoading.service();
  // if (loading.value) {
  //   loadingHandle = SwdLoading.service();
  // } else {
  //   loadingHandle?.close();
  // }
}, 2000);

async function submit() {
  try {
    await formRef.value.validate();
    console.log("passed!");
  } catch (e) {
    console.log("the error", e);
  }
}

function callMessageBox() {
  SwdMessageBox.confirm("确认删除吗？", "确认消息", {
    title: "标题",
    type: "warning",
    showClose: true,
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    callback: (action) => {
      console.log(action);
    },
    beforeClose(action, instance, next) {
      if (action === "confirm") {
        instance.confirmButtonLoading = true;
        instance.confirmButtonText = "删除中...";
        setTimeout(() => {
          next();
        }, 2000);
      } else {
        next();
      }
    },
  });
}
</script>

<template>
  <div>
    <p>
      <swd-button @click="handleBtnClick" :use-throttle="false"
        >Default</swd-button
      >
      <swd-button type="primary" @click="handleNotify">Primary</swd-button>
      <swd-button type="success" @click="console.log('click')"
        >Success</swd-button
      >
      <swd-button type="info" @click="callMessageBox">Info</swd-button>
      <swd-button type="warning">Warning</swd-button>
      <swd-popconfirm title="Are you sure to delete this?">
        <swd-button type="danger">Danger</swd-button>
      </swd-popconfirm>
    </p>
    <p>
      <swd-button plain>Plain</swd-button>
      <swd-button type="primary" plain>Primary</swd-button>
      <swd-button type="success" plain>Success</swd-button>
      <swd-button type="info" plain>Info</swd-button>
      <swd-button type="warning" plain>Warning</swd-button>
      <swd-button type="danger" plain>Danger</swd-button>
    </p>
    <p>
      <swd-button round>Round</swd-button>
      <swd-button type="primary" round>Primary</swd-button>
      <swd-button type="success" round>Success</swd-button>
      <swd-button type="info" round>Info</swd-button>
      <swd-button type="warning" round loading>Warning</swd-button>
      <swd-button type="danger" round>Danger</swd-button>
    </p>
    <p>
      <swd-button icon="search" circle />
      <swd-button type="primary" icon="edit" circle />
      <swd-button type="success" icon="check" circle />
      <swd-button type="info" icon="message" circle />
      <swd-button type="warning" icon="star" circle />
      <swd-button type="danger" icon="trash" circle />
    </p>
    <p>
      <swd-button-group size="small" type="primary">
        <swd-button round>Round</swd-button>
        <swd-button type="primary" round>Primary</swd-button>
        <swd-button type="success" round>Success</swd-button>
        <swd-button type="info" round>Info</swd-button>
        <swd-button type="warning" round loading>Warning</swd-button>
        <swd-button type="danger" round>Danger</swd-button>
      </swd-button-group>
    </p>
    <swd-collapse v-model="openVal" accordion>
      <swd-collapse-item name="a" title="Title a">
        <h1>headline title</h1>
        <div>this is content a</div>
      </swd-collapse-item>
      <swd-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </swd-collapse-item>
      <swd-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </swd-collapse-item>
    </swd-collapse>
  </div>

  <swd-dropdown :items="dropdownOptions" size="small" split-button
    >dropdown</swd-dropdown
  >
  <swd-tooltip
    ref="tooltipRef"
    placement="right-end"
    trigger="contextmenu"
    :popper-options="{ placement: 'right-end', strategy: 'fixed' }"
  >
    <swd-button icon="arrow-up">tooltip</swd-button>
    <template #content> 弹出部分 </template>
  </swd-tooltip>
  <swd-input v-model="inputValue" placeholder="请输入内容">
    <template #suffix> <button>test</button> </template>
    <template #append> test1</template>
  </swd-input>
  <swd-switch
    v-model="switchValue"
    size="large"
    active-text="ON"
    inactive-text="OFF"
  />
  <swd-select
    v-model="selectValue"
    placeholder="请选择"
    :render-label="customOptionRender"
    :options="selectOptions"
    clearable
    filterable
  >
    <swd-option label="opt 1" value="1" />
    <swd-option label="opt 2" value="2" />
    <span>a</span>
    <swd-option label="opt 3" value="3" disabled />
    <swd-option label="opt 4" value="4">
      <span style="color: green">opt 4</span>
    </swd-option>
  </swd-select>

  <swd-form
    ref="formRef"
    :model="formData"
    :rules="formRules"
    label-suffix=":"
    swd-loading-text="loading..."
    swd-loading-spinner="circle-notch"
    @submit="submit"
  >
    <swd-form-item label="email" prop="email" disabled>
      <swd-input v-model="formData.email" clearable />
    </swd-form-item>
    <swd-form-item label="password" prop="password">
      <swd-input v-model="formData.password" type="password" />
    </swd-form-item>
    <swd-form-item
      label="confirm password"
      prop="confirmPwd"
      :rules="[
        {
          required: true,
          trigger: 'test',
          message: '测试自定义触发',
        },
      ]"
    >
      <template #default="{ validate: _validate }">
        <swd-input v-model="formData.confirmPwd" type="password" />
        <button @click.prevent="_validate('test')">vli</button>
      </template>
    </swd-form-item>
    <div style="text-align: center">
      <swd-button type="primary" native-type="submit">Submit</swd-button>
    </div>
  </swd-form>

  <swd-alert title="title" type="success" show-icon />
  <swd-alert title="title" description="description" type="warning" show-icon />
  <swd-alert title="title" description="description" type="danger" show-icon />
  <swd-alert title="title" description="description" type="info" show-icon />

  <swd-upload
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :default-file-list="[
      {
        uid: '123',
        size: 123,
        name: 'test.png',
        status: 'uploading',
        percent: 20,
      },
      {
        uid: '124',
        size: 123,
        name: 'test1.png',
        status: 'success',
        percent: 100,
      },
      {
        uid: '125',
        size: 123,
        name: 'test4.png',
        status: 'error',
        percent: 34,
      },
    ]"
  >
    <swd-button type="success" round icon="upload"> 上传文件 </swd-button>
  </swd-upload>
</template>
