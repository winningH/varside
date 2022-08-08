import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/loading',
    component: () => import('@/views/AniLoading.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_ROUTER),
  routes
})

export default router
