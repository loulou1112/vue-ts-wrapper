const path = require('path')

export function importAll(r: __WebpackModuleApi.RequireContext, ext: string = '.vue') {
  let map: Record<string, any> = {}
  r.keys().forEach((key: string) => {
    map[path.basename(key, ext)] = r(key).default
  })
  return map
}
