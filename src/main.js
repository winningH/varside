import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import GlobalComponent from '@/components/global'
import './styles/index.less'
import 'ant-design-vue/es/message/style/css'
import i18n from '@/language'

createApp(App).use(store).use(router).use(i18n).use(GlobalComponent).mount('#app')
