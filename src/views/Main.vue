<template>
  <div>
    <NavMenu></NavMenu>

    <div class="router-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'Main'
  })
</script>

<style scoped>
  .router-page {
    padding: 80px 30px 20px;
  }
</style>
