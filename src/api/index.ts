import Vue from 'vue'
import service from './request'
import cmds from './cmds'

let $api: Record<string, any> = {}

Object.keys(cmds).forEach((cmdName) => {
  let methods = service.defaults.method || 'POST'
  // tslint:disable-next-line
  // $api[cmdName] = () => service({ cmd: })
})
