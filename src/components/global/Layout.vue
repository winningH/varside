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

<style scoped>
  .layout {
    width: 1600px;
    padding: 80px 20px 0;
    margin: 0 auto;
  }

  @media (max-width: 1700px) {
    .layout {
      width: 1390px;
    }
  }

  @media (max-width: 1500px) {
    .layout {
      width: 1150px;
    }
  }
</style>
