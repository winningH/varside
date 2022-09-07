<template>
  <a-config-provider :locale="settingStore.ant_locale">
    <router-view />
  </a-config-provider>
</template>

<script>
  import { useSetting } from './store/setting'

  export default {
    name: 'App',
    setup() {
      const settingStore = useSetting()

      return {
        settingStore
      }
    }
  }
</script>
