const routes = [
  {
    path: '/component',
    name: 'MyComponet',
    component: () => import('@/views/Component/index.vue')
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import('@/views/Note/index.vue')
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import('@/views/Animation/index.vue')
  }
]

export default routes
