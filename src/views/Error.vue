<template>
  <div class="error">404 not found</div>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Error',
    components: {},

    props: {},

    setup() {}
  })
</script>

<style scoped>
  .error {
    padding: 60px;
    text-align: center;
  }
</style>
