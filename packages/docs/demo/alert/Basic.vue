<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <swd-alert type="success">Success alert</swd-alert>
    <swd-alert type="info">Info alert</swd-alert>
    <swd-alert type="warning">Warning alert</swd-alert>
    <swd-alert type="danger">Error alert</swd-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <swd-alert type="success" title="Success alert" />
    <swd-alert type="info" title="Info alert" />
    <swd-alert type="warning" title="Warning alert" />
    <swd-alert type="danger" title="Error alert" />
  </div>
</template>
