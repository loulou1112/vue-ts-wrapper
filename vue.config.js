const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')
const webpack = require('webpack')
const path = require('path')

let plugins = [new LodashModuleReplacementPlugin()]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_debugger: true,
          drop_console: true
        }
      }
    })
  )
}
process.env.VUE_APP_ENV = process.argv[4]
module.exports = {
  productionSourceMap: false,
  parallel: false,
  devServer: {
    port: 8888
  },
  configureWebpack: {
    resolve: {
      alias: {
        types: './types'
      }
    },
    plugins
  },
  chainWebpack(config) {
    // lodash 按需加载
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
    // vant 样式按需加载
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap((options) => {
        options.getCustomTransformers = () => ({
          before: [
            tsImportPluginFactory({
              libraryName: 'vant',
              libraryDirectory: 'es',
              style: (name) => `${name}/style/index`
            })
          ]
        })
        return options
      })
    // 增加全局变量
    config.plugin('provide').use(webpack.ProvidePlugin, [
      {
        gc: path.resolve(__dirname, './src/libs/appMixins/index.ts')
      }
    ])
  }
}
