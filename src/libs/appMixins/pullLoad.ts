import { Vue, Component } from 'vue-property-decorator'
// 步骤1: 在 `types/appMixins` 下声明全局对象身上的属性 gc
// 步骤2: 在 `libs/index.ts` 初始化注册
// 步骤3: 在当前 mixin 中写操作函数等
// 步骤4: 在 `当前mixin` 中到 created 周期中注册操作到 全局对象`gc`中
declare module 'vue/types/vue' {
  interface Vue {
    onPullDownRefresh?(): void
  }
}

@Component({})
export default class PullDown extends Vue {
  isLoading: boolean = false
  pullDownConfig: PullDownConfig = {}
  created() {
    window.gc.startPullDownRefresh = this.startPullDownRefresh
    window.gc.stopPullDownRefresh = this.stopPullDownRefresh
  }
  startPullDownRefresh() {
    this.isLoading = true
  }
  stopPullDownRefresh() {
    this.isLoading = false
  }
  onRefresh() {
    const currentView = this.$route && this.$route.matched[0].instances.default
    currentView && currentView.onPullDownRefresh && currentView.onPullDownRefresh()
  }
}
