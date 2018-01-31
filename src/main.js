import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from './router'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/font/iconfont.css'
import './assets/css/swiper-3.4.2.min.css'
import global_ from './views/util.vue'
Vue.prototype.GLOBAL = global_

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(VueAwesomeSwiper)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
