import { importAll } from '@/utils'

const mixins = importAll(require.context('./appMixins/mixins', false, /\.ts$/), '.ts')

export default Object.keys(mixins).map((key) => mixins[key])
