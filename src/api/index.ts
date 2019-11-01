import Vue from 'vue'
import service from './request'
import cmds from './cmds'

const env: string = process.env.VUE_APP_ENV

let $api: Record<string, Function> = {}

// data: ['PUT', 'POST', 'PATCH']
// params: ['GET']

Object.keys(cmds).forEach((cmdName) => {
  $api[cmdName] = (data: any) => {
    const methods: string | undefined = service.defaults.method
    let options: Record<string, any> = {}
    if (!methods) return
    const newData = {
      ...data,
      cmd: env === 'mock' ? cmds[cmdName].mock : cmds[cmdName].cmd
    }
    methods.toLocaleLowerCase() === 'get' ? (options.params = newData) : (options.data = newData)
    return service(options)
  }
})

Vue.prototype.$api = $api

export default $api
