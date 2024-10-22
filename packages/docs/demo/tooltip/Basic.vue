<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <swd-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <swd-button>top-start</swd-button>
      </swd-tooltip>
      <swd-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <swd-button>top</swd-button>
      </swd-tooltip>
      <swd-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <swd-button>top-end</swd-button>
      </swd-tooltip>
    </div>
    <div class="row">
      <swd-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <swd-button>left-start</swd-button>
      </swd-tooltip>
      <swd-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <swd-button>right-start</swd-button>
      </swd-tooltip>
    </div>
    <div class="row">
      <swd-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <swd-button class="mt-3 mb-3">left</swd-button>
      </swd-tooltip>
      <swd-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <swd-button>right</swd-button>
      </swd-tooltip>
    </div>
    <div class="row">
      <swd-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <swd-button>left-end</swd-button>
      </swd-tooltip>
      <swd-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <swd-button>right-end</swd-button>
      </swd-tooltip>
    </div>
    <div class="row center">
      <swd-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <swd-button>bottom-start</swd-button>
      </swd-tooltip>
      <swd-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <swd-button>bottom</swd-button>
      </swd-tooltip>
      <swd-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <swd-button>bottom-end</swd-button>
      </swd-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
