<template>
  <a-config-provider :locale="settingStore.ant_locale">
    <router-view />
  </a-config-provider>
</template>

<script>
  import { watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import { useSetting } from './store/setting'

  export default {
    name: 'App',
    setup() {
      const route = useRoute()
      const settingStore = useSetting()

      watchEffect(() => {
        let menu = route.path.split('/')[1]
        settingStore.changeMenu([menu])
      })

      return {
        settingStore
      }
    }
  }
</script>
