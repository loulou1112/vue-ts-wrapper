import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $service: API
  }
}

declare global {
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
