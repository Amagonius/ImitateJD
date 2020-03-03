import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../views/Register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Index',
    redirect: '/botnav/index'
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    //懒加载
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/botnav',
    name: 'Botnav',
    component: () => import('../views/Botnav.vue'),
    children:[
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('../views/Categories.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/Index.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
