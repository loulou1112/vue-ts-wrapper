import Vue from 'vue'
import { importAll } from '@/utils'
import { Button, Field, CellGroup, PullRefresh, Toast } from 'vant'

/*******  安装 vant 组件 *******/
const vantComs = [Button, Field, CellGroup, PullRefresh, Toast]
vantComs.forEach((c) => Vue.use(c))

/*******  自动导入 项目中的全局组件，全局混入 和 全局过滤器 *******/
const components = importAll(require.context('@/components', true, /\.vue$/))
const mixins = importAll(require.context('@/mixins', true, /\.ts$/), '.ts')
const filters = importAll(require.context('@/filters', true, /\.ts$/), '.ts')

Object.keys(components).forEach((name: string) => {
  Vue.component(name, components[name])
})

Object.keys(mixins).forEach((name: string) => {
  Vue.mixin(mixins[name])
})

Object.keys(filters).forEach((name: string) => {
  Vue.filter(name, filters[name])
})
