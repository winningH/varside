<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
    setup() {}
  }
</script>

<style lang="less" scoped>
  .layout {
    min-width: 1100px;
    width: 85%;
    padding: 80px 20px 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 1350px) and (max-width: 1500px) {
    .layout {
      width: 1280px;
    }
  }

  @media (min-width: 1600px) {
    .layout {
      width: 1420px;
    }
  }
</style>
