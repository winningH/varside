import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'
import { useSettingStore } from '@/store/setting'
import { message } from 'ant-design-vue'
import HomeChildren from './homeChildren'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      ...HomeChildren
    ]
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
  history:
    import.meta.env.MODE === 'github'
      ? createWebHashHistory()
      : createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

router.beforeEach(async (to, from) => {
  const user = useUserStore()
  const setting = useSettingStore()
  let menu = to.path.split('/')[1]
  setting.changeMenu([menu])

  if (to.path !== '/login' && !user.isLogin) {
    message.warning('登录已过期')
    await sleep(3000)
    return '/login'
  }
})

export default router
