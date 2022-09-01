<template>
  <Layout>
    <div class="page">
      <div>loading {{ route.query.name }} page</div>
      <a-button type="primary" @click="back">back</a-button>
    </div>
  </Layout>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  const back = () => {
    router.back()
  }
</script>

<style lang="less" scoped>
  .page {
    width: 600px;
    height: 500px;
    margin: 0 auto;
    background-color: #f5f5f5;
  }
</style>
