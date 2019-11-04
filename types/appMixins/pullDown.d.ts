interface GlobalConfig {
  startPullDownRefresh(): void
  stopPullDownRefresh(): void
}
interface PullDownConfig {
  isLoading?: boolean
  pullingText?: string
  loosingText?: string
  loadingText?: string
  successText?: string
  successDuraction?: number
  animationDuraction?: number
  headHeight?: number
  disabled?: boolean
}
