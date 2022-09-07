<template>
  <div class="home">welcome to my homepage</div>

  <p class="home">最近一次登录：{{ lastLogin }}</p>

  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar v-model:value="currentDate" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/user'
  import { storeToRefs } from 'pinia'

  defineOptions({
    name: 'Home'
  })

  const userStore = useUserStore()
  const { lastLogin } = storeToRefs(userStore)

  const currentDate = ref()
  const onPanelChange = (value, mode) => {
    console.log(value, mode)
  }
</script>

<style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
</style>
