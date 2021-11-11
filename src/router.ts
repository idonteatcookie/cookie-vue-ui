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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
