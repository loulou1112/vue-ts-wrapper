import { importAll } from '@/utils'

const mixins = importAll(require.context('./appMixins', true, /\.ts$/), '.ts')

export default Object.keys(mixins).map((key) => mixins[key])
