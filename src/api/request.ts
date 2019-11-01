import axios from 'axios'
import projectConfig from '@/project.config'

// 请求超时事件
const networkTimeout = projectConfig.networkTimeout
const timeout = networkTimeout && networkTimeout.request ? networkTimeout.request : 30000

const service = axios.create({
  baseURL: process.env.BASE_URL,
  method: 'post',
  timeout,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

service.interceptors.request.use((config) => {
  return config
})

service.interceptors.response.use((config) => {
  return config
})

// 用于判断是否为 mock 环境
const env: string = process.env.VUE_APP_ENV

export default (data: any, cmd: number, mock: string) => {
  data.cmd = env === 'mock' ? mock : cmd
  return service.post('/', data)
}
