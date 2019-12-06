import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/home/list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
      },
      {
        path: '/home/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
      },
    ]
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router