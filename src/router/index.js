import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import Login from '@/views/Login'
import Postdemo from '@/views/postdemo'
import Index from '@/views/Index'

Vue.use(Router)
Vue.use(Mint)

export default new Router({
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
          path: '/index/postdemo',
          component: Postdemo
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
