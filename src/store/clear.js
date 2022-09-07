import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { useSettingStore } from './setting'

export const useClearStore = defineStore('clear', {
  actions: {
    clearSettingStore() {
      const setting = useSettingStore()
      setting.$patch({
        menu: []
      })
    },

    clearUserStore() {
      const user = useUserStore()
      user.$reset()
    },

    clearAllStore() {
      this.clearSettingStore()
      this.clearUserStore()
    }
  }
})
