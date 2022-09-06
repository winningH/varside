import { defineStore } from 'pinia'
import Ant_zh from 'ant-design-vue/es/locale/zh_CN'
import Ant_en from 'ant-design-vue/es/locale/en_US'

import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import dayjs from 'dayjs'

export const useSetting = defineStore('setting', {
  state: () => ({
    menu: [],
    lang: 'zh'
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
      console.log(lang)
      this.lang = lang
      let dayLang = lang === 'zh' ? 'zh-cn' : 'en'
      dayjs.locale(dayLang)
    }
  },

  persist: { storage: localStorage, key: 'setting' }
})
