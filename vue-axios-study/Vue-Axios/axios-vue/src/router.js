import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/contactList'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/2-2',
      name: 'axios请求方法',
      component: () => import('./views/2-2.vue')
    },
    {
      path: '/2-3',
      name: 'axios并发请求',
      component: () => import('./views/2-3.vue')
    },
    {
      path: '/contactList',
      name: "联系人列表",
      component: () => import ('./views/ContactList.vue'),
    }
  ]
})
