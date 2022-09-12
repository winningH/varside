<template>
  <div class="component">
    <a-menu
      class="component-menu"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      @select="onMenuSelect"
    >
      <a-menu-item v-for="n in menu" :key="n">组件 {{ n }}</a-menu-item>
    </a-menu>

    <div class="component-body">
      hello
      <component :is="AsyncComp"></component>
    </div>
  </div>
</template>

<script setup>
  import { ref, watchEffect, defineAsyncComponent, shallowRef } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  defineOptions({
    name: 'MyComponent'
  })

  const router = useRouter()
  const route = useRoute()
  const menu = ref([])
  const selectedKeys = ref()
  const activeComponent = ref()
  const AsyncComp = shallowRef()

  const onMenuSelect = m => {
    selectedKeys.value = [m.key]
    activeComponent.value = m.key
    router.push({
      paht: route.path,
      query: {
        ...route.query,
        c: activeComponent.value
      }
    })
  }

  watchEffect(() => {
    selectedKeys.value = [route.query?.c]
    activeComponent.value = route.query?.c
    AsyncComp.value = defineAsyncComponent(() =>
      import(`./components/wo-${activeComponent.value}.vue`)
    )
  })

  const components = import.meta.glob('./components/*.vue')
  for (const key in components) {
    if (Object.hasOwnProperty.call(components, key)) {
      let item = key.split('/')
      let name = item[item.length - 1]
      let compName = name.replace(/^wo\-(\w+)\.vue$/, '$1')
      menu.value.push(compName)
    }
  }
</script>

<style style="less" scoped>
  .component-menu {
    position: fixed;
    top: 60px;
    bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .component-body {
    padding: 20px 0 20px 280px;
    flex: 1;
  }
</style>
