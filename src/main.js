// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeaderScroll from './components/HeaderScroll/HeaderScroll.vue'
import store from '../store'
import Fenge from  './components/fenge.vue'

import './mock/mockServers'

Vue.component('HeaderScroll',HeaderScroll)
Vue.component('Fenge',Fenge)
  new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,

})
