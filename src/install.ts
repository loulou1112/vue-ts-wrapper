import Vue from 'vue'
import { importAll } from '@/utils'
import { Button } from 'vant'

Vue.use(Button)

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
