<template>
  <div>
    <swd-button type="primary" loading>Loading</swd-button>
    <swd-button type="primary" loading-icon="circle-notch" loading
      >Loading</swd-button
    >
    <swd-button type="primary" loading>
      <template #loading>
        <swd-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </swd-button>
  </div>
</template>
