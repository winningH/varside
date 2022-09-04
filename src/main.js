import { createApp } from 'vue'
import './styles/index.less'
import 'ant-design-vue/es/message/style/css'
import App from './App.vue'
import router from './router'

import GlobalComponent from '@/components/global'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).use(GlobalComponent).mount('#app')
