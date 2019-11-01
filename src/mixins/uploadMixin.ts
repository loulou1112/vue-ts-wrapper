import { Vue, Component } from 'vue-property-decorator'
declare module 'vue/types/vue' {
  interface Vue {
    popAlert(): void
  }
}

/**
 * mixins
 */
@Component
export default class uploadMixin extends Vue {
  popAlert() {
    alert('alert')
  }
}
