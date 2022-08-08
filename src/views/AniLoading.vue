<template>
  <div>loading page</div>
  <a-button type="primary" @click="back">back</a-button>
  {{ route.query.name }}
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  const back = () => {
    router.back()
  }
</script>

<style lang="scss" scoped></style>
