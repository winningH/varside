<template>
  <div>loading {{ route.query.name }} page</div>
  <a-button type="primary" @click="back">back</a-button>
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
