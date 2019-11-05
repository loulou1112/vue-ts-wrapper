import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $service: API
  }
}

declare global {
  // 全局 API 的接口
  interface API {}

  interface ProjectConfig {
    title: string // 全局标题名称
    views: string[] // 所有页面
    baseURL?: string // 请求url
    networkTimeout?: NetworkTimeout // 超时时间
  }

  interface NetworkTimeout {
    request?: number
  }
}
