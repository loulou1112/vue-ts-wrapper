import VueInstance from 'vue'
import { Vue, Component, Provide } from 'vue-property-decorator'
// 注意1: 在 `types/appMixins` 下声明全局对象身上的属性 gc
// 注意2: 想赋予 vue拥有的方法
declare module 'vue/types/vue' {
  interface Vue {
    onPullDownRefresh?(): void
    startPullDownRefresh?(): void
    stopPullDownRefresh?(): void
  }
}

@Component({})
export default class PullDown extends Vue {
  isLoading: boolean = false
  beforeCreate() {
    // 注意3: 赋予gc实例真正的方法
    VueInstance.prototype._startPullDownRefresh = this.startPullDownRefresh
    VueInstance.prototype._stopPullDownRefresh = this.stopPullDownRefresh
  }
  @Provide()
  startPullDownRefresh() {
    this.isLoading = true
  }
  @Provide()
  stopPullDownRefresh() {
    this.isLoading = false
  }
  onRefresh() {
    const currentView = this.$route && this.$route.matched[0].instances.default
    currentView && currentView.onPullDownRefresh && currentView.onPullDownRefresh()
  }
}
