import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useLoginStore } from '../store/login'
import { message } from 'ant-design-vue'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/404',
    name: 'Error',
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: import.meta.env.MODE === 'github' ? createWebHashHistory() : createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

router.beforeEach(async (to, from) => {
  const store = useLoginStore()
  if (to.path !== '/login' && !store.isLogin) {
    message.warning('登录已过期')
    await sleep(3000)
    return '/login'
  }
})

export default router
