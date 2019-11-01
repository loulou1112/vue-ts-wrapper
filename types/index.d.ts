import Vue from 'vue'

declare module 'vue/type/vue' {
  interface Vue {
    $api: any
  }
}
