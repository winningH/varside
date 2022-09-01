import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router'

import GlobalComponent from '@/components/global'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).use(GlobalComponent).mount('#app')
