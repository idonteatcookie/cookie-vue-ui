import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/button/index.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout/index.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/icon/index.vue')
  },
  {
    path: '/alert',
    name: 'alert',
    component: () => import('@/views/alert/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/cookie-vue-ui/'),
  routes
})

export default router
