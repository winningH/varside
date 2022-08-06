<template>
  <div class="about" ref="about">
    <h1>This is an about page</h1>
    <div class="block"></div>

    <el-button @click="handleClick">测试</el-button>
  </div>
</template>

<script>
  export default {
    name: 'About',

    mounted() {
      this.$nextTick(() => {
        console.log('/about', document.documentElement.scrollHeight)
        console.log('offset', document.documentElement.offsetHeight)
      })
    },

    methods: {
      handleClick() {
        this.$message.warning('hello')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    text-align: center;
  }
  .block {
    width: 50vw;
    height: 50vh;
    margin-bottom: 30px;
    background-color: #f3f3f3;
  }
</style>
