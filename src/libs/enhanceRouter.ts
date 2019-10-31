import Vue from 'vue'
import VueRouter, { RawLocation } from 'vue-router'
import { extend } from 'lodash'

type ErrorHandler = (err: Error) => void
/**
 * Enhancing VueRouter function, and providing `redirect` to clear history.
 * In addition, it maintains a cachedViews for `keep-alive` to deal with the page's alive.
 */

const view: Record<string, any> = {
  cachedViews: []
}
let { cachedViews } = Vue.observable(view)

Vue.prototype.$cachedViews = cachedViews

function isBack(name: string | undefined) {
  if (cachedViews.length === 0 || cachedViews.length === 1) {
    return false
  }
  return cachedViews[cachedViews.length - 2] === name
}

export function enhanceRouter(router: VueRouter) {
  extend(router.constructor.prototype, {
    redirect(location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler) {
      router.go(-cachedViews.length + 1)
      cachedViews = []
      setTimeout(() => {
        router.replace(location, onComplete, onAbort)
      }, 0)
    }
  })

  router.beforeEach((to, from, next) => {
    isBack(to.name) ? cachedViews.pop(to.name) : cachedViews.push(to.name)
    next()
  })
}

export default {
  enhanceRouter
}
