<template>
  <div>MyComponent</div>
</template>

<script setup>
  import { ref, reactive, computed, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  defineOptions({
    name: 'MyComponent'
  })
</script>

<style scoped></style>
