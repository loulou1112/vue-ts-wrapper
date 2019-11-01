import axios, { AxiosRequestConfig } from 'axios'
import projectConfig from '@/project.config'
import { merge } from 'lodash'

const mergeRequestConfig: AxiosRequestConfig = merge(
  {
    baseURL: process.env.BASE_URL,
    method: 'post',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  projectConfig.requestConfig
)

const service = axios.create(mergeRequestConfig)

service.interceptors.request.use((config) => {
  return config
})

service.interceptors.response.use((config) => {
  return config
})

export default service
