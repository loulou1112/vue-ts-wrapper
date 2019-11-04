import { importAll } from '@/utils'

const mixins = importAll(require.context('./appMixins', false, /\.ts$/), '.ts')

export default Object.keys(mixins).map((key) => mixins[key])

// 合成到 gc 上
const gc: GlobalConfig = {
  startPullDownRefresh() {},
  stopPullDownRefresh() {}
}

window.gc = gc
