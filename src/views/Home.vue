<template>
  <div class="home">welcome to my homepage</div>

  <p class="home">最近一次登录：{{ lastLogin }}</p>
</template>

<script setup>
  import { useUser } from '@/store/user'
  import { storeToRefs } from 'pinia'

  defineOptions({
    name: 'Home'
  })

  const userStore = useUser()
  const { lastLogin } = storeToRefs(userStore)
</script>

<style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
</style>
