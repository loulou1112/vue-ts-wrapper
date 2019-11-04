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
    views: string[]
    baseURL?: string
    networkTimeout?: NetworkTimeout
  }

  interface NetworkTimeout {
    request?: number
  }
}
