import { createI18n } from 'vue-i18n'
import { toRaw, toRef } from 'vue'
import { useSetting } from '@/store/setting'
import pinia from '@/store'

const store = useSetting(pinia)

import enLocale from './en-us'
import zhLocale from './zh-cn'

const i18n = createI18n({
  legacy: false,
  locale: store.lang,
  messages: {
    en: enLocale,
    zh: zhLocale
  },
  globalInjection: true
})

export default i18n
