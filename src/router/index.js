import { createRouter, createWebHistory } from 'vue-router'
const Home = { template: '<div>Home</div>' }

const routes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
