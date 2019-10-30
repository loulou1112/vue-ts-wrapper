import Vue from 'vue'
import VueRouter from 'vue-router'
import { enhanceRouter } from '@/libs/enhanceRouter'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

enhanceRouter(router)

export default router
