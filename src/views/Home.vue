<template>
  <div class="home">welcome to my homepage</div>
</template>

<script setup>
  // import { ref } from 'vue'
  // import { useRouter } from 'vue-router'
  import { message } from 'ant-design-vue'

  defineProps({
    msg: {
      type: String,
      default: 'hello vite'
    }
  })

  const count = ref(0)
</script>

<style scoped>
  .home {
    text-align: center;
  }
</style>
