import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Home from '@/components/Home'
import Sort from '@/components/Sort'
import Find from '@/components/Find'
import Mine from '@/components/Mine'

Vue.use(Router)
Vue.use(Mint)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/index/home',
          component: Home
        },
        {
          path: '/index/sort',
          component: Sort
        },
        {
          path: '/index/find',
          component: Find
        },
        {
          path: '/index/mine',
          component: Mine
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
