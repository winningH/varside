import { createI18n } from 'vue-i18n'

import enLocale from './en-us'
import zhLocale from './zh-cn'

import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: enLocale,
    zh: zhLocale
  },
  globalInjection: true
})

export default i18n
