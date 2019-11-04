import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Service from './api'
import './install'
import './assets/scss/index.scss'
import 'normalize-scss'

Vue.config.productionTip = false
// 请求 api
Vue.prototype.$service = new Service()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
