import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/loading',
    component: () => import('@/views/AniLoading.vue')
  }
]

const router = createRouter({
  history: import.meta.env.MODE === 'github' ? createWebHashHistory() : createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
