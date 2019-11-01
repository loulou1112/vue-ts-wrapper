import { AxiosRequestConfig } from 'axios'

declare global {
  interface ProjectConfig {
    views: string[]
    requestConfig?: AxiosRequestConfig
  }
  interface Vue {
    $api: any
  }
}
