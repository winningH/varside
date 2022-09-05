<template>
  <div>
    <NavMenu></NavMenu>

    <div class="router-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script name="Main" setup>
  import { ref, reactive, computed, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
</script>

<style scoped>
  .router-page {
    padding: 80px 30px 20px;
  }
</style>
