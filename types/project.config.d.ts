// declare module {

interface ProjectConfig {
  views: string[]
  baseURL?: string
  networkTimeout?: NetworkTimeout
}

interface NetworkTimeout {
  request?: number
}
// }
