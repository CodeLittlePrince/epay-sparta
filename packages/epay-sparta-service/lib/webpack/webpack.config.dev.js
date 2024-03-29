const webpack = require('webpack')
const { merge } = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpackConfigBase = require('./webpack.config.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports.getConfig = context => {
  return merge(webpackConfigBase, {
    mode: 'development',
    // sourcemap 模式
    devtool: 'eval-source-map',
    output: {
      path: context.resolve('dev'),
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: context.webpackConfig.publicPath || '/',
      globalObject: 'this'
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          // Copy favicon to destination
          {
            from: context.resolve(context.spartaConfig.favicon),
            to: context.resolve('dev')
          }
        ]
      }),
      // 定义全局常量
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.epaySpartaCliArgv)
      }),
      // 热替换插件
      new webpack.HotModuleReplacementPlugin(),
      // 更友好地输出错误信息
      new FriendlyErrorsPlugin(),
      // 提示信息
      new webpack.NoEmitOnErrorsPlugin(),
    ]
  })
}