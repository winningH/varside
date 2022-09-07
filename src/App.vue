<template>
  <a-config-provider :locale="settingStore.ant_locale">
    <router-view />
  </a-config-provider>
</template>

<script>
  import { useSetting } from './store/setting'
  import { useI18n } from 'vue-i18n'

  export default {
    name: 'App',
    setup() {
      const settingStore = useSetting()
      const { locale } = useI18n()

      watchEffect(() => {
        locale.value = settingStore.lang
      })

      return {
        settingStore
      }
    }
  }
</script>
