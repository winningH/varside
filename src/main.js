import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router'

import GlobalComponent from '@/components/global'

createApp(App).use(router).use(GlobalComponent).mount('#app')
