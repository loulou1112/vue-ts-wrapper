/// <reference path="./project.config.d.ts" />

// export let $api: any
// export as namespace $api

export declare namespace $api {
  // interface request {}
}

declare global {
  interface ProjectConfig {
    views: string[]
    request?: string
  }
}

declare module 'vue/type/vue' {
  interface Vue {
    $form: {}
  }
}
