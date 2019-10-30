module.exports = {
  devServer: {
    port: 8888
  },
  configureWebpack: {
    resolve: {
      alias: {
        types: './types'
      }
    }
  }
}
