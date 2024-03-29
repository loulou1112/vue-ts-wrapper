import Vue from 'vue'
import VueRouter, { RawLocation } from 'vue-router'
import { extend } from 'lodash'
import config from '@/project.config'

const globelTitle = config.title

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
    const keepAlive = to.meta.keepAlive
    if (typeof keepAlive === 'boolean') {
      keepAlive && cachedViews.push(to.name)
    } else {
      isBack(to.name) ? cachedViews.pop(to.name) : cachedViews.push(to.name)
    }
    document.title = to.meta.title || globelTitle
    next()
  })
}

export default {
  enhanceRouter
}
