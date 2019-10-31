const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8888
  },
  configureWebpack: {
    resolve: {
      alias: {
        types: './types'
      }
    },
    externals: {
      // vue: 'Vue',
      // 'vue-router': 'VueRouter',
      // vuex: 'Vuex'
    },
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        }
      }),
      new LodashModuleReplacementPlugin()
    ]
  },
  chainWebpack(config) {
    config.module
      .rule('ts')
      .use('babel-loader')
      .loader('babel-loader')
      .tap((options) => {
        if (options) {
          options.plugins = ['lodash']
        } else {
          options = {
            plugins: ['lodash']
          }
        }
        return options
      })
  }
}
