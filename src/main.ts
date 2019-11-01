import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './install'
import Service from './api'

Vue.config.productionTip = false
Vue.prototype.$service = new Service()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
