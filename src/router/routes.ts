import { RouteConfig } from 'vue-router'
import projectConfig from '@/project.config'
import { firstLowerCase } from '@/utils'

const views = projectConfig.views
/**
 * path: 如果最后是index，则用上一级名称，如果没有上一级就用index名称
 * key: name, value: view
 */
let viewMap: Record<string, string> = {}

let routes: RouteConfig[] = views.map((view: string) => {
  const viewSplit = view.split('/')

  let name =
    viewSplit.length === 1
      ? firstLowerCase(viewSplit[0])
      : firstLowerCase(viewSplit[viewSplit.length - 2].toLowerCase())

  if (viewMap[name])
    throw new Error(`the viewpath \`${name}\` has comflict with ${viewMap[name]}, please change the viewpath`)

  viewMap[name] = view

  const config = require(`@/views/${view}.json`)

  let routerOptions: RouteConfig = {
    path: `/${name.toLocaleLowerCase()}`,
    name,
    component: () => import(`@/views/${view}.vue`),
    meta: {
      title: name,
      ...config
    }
  }

  return routerOptions
})

routes.unshift({
  path: '/',
  redirect: routes[0].path
})
routes.push({
  path: '*',
  redirect: routes[0].path
})

export default routes
