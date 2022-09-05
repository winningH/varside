<template>
  <router-view />
</template>

<script>
  import { watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import { useSettingStore } from './store/setting'

  export default {
    name: 'App',
    setup() {
      const route = useRoute()
      const settingStore = useSettingStore()

      watchEffect(() => {
        let menu = route.path.split('/')[1]
        settingStore.changeMenu([menu])
      })
    }
  }
</script>
