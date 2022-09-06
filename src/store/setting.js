import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    menu: [],
    lang: 'zh-CN'
  }),

  actions: {
    changeMenu(menu) {
      this.menu = menu
    }
  },

  persist: { storage: localStorage, key: 'setting' }
})
