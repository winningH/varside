import { defineStore } from 'pinia'
import Ant_zh from 'ant-design-vue/es/locale/zh_CN'
import Ant_en from 'ant-design-vue/es/locale/en_US'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    menu: [],
    lang: 'en'
  }),

  getters: {
    ant_locale: state => {
      return state.lang === 'zh' ? Ant_zh : Ant_en
    }
  },

  actions: {
    changeMenu(menu) {
      this.menu = menu
    },

    changeLanguage(lang) {
      this.lang = lang
    }
  },

  persist: { storage: localStorage, key: 'setting' }
})
