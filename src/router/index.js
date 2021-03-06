import Vue from 'vue'
import VueRouter from 'vue-router'
import guard from './guard'

// 添加路由工具
import routers from '@/config/router.config.js'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  ...routers
]

const router = guard(new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
}));

export default router