import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: import.meta.env.MODE === 'github' ? createWebHashHistory() : createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
