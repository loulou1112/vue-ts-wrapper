import Vue from 'vue'

export interface API {
  getUserInfo(data: { username: Record<string, number> }): Promise<any>
}

declare module 'vue/types/vue' {
  interface Vue {
    $service: API
  }
}
