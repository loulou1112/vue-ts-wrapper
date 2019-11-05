const env: string = process.env.VUE_APP_ENV // dev, mock, test, prod
// api 请求基本路径
const baseURL: Record<string, string> = {
  dev: 'http://172.16.1.120:9901',
  mock: 'http://172.16.1.120:9901',
  test: 'https://app-gateway-sit.yunjiaplus.com',
  prod: 'https://app-gateway.yunjiaplus.com'
}

const properties: ProjectConfig = {
  title: '全局title',
  // 页面路径，在views内的才能被读取
  views: ['AView/index', 'BView/index', 'CView/index', 'DView/index'],
  // 请求基本路径(可选)
  baseURL: baseURL[env],
  networkTimeout: {
    request: 30000
  }
}

export default properties
