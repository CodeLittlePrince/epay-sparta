const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackConfigBase = require('./webpack.config.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports.getConfig = context => {
  const ANALYZE = context.cliArgs.analyze
  const ONLINE = context.cliArgs.online

  let config = merge(webpackConfigBase, {
    mode: 'production',
    // You should configure your server to disallow access to the Source Map file for normal users!
    // devtool: 'source-map', // 因为需要PE支持，暂时先不生成吧
    output: {
      path: context.resolve('dist'),
      publicPath: context.webpackConfig.publicPath || '/',
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].js',
      globalObject: 'this'
    },
    optimization: {
      // 分割文件
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // 有些npm包其实只有特定页面才用到，没必要一开始就打进来，配合dynamic import打包进需要的chunk中
          // vendors: {
          //   name: 'chunk-vendors',
          //   test: /[\\/]node_modules[\\/]/,
          //   priority: -10,
          // },
          common: {
            name: 'chunk-common',
            priority: -20,
            minSize: 20000, // 默认是20000，如果设置成0则为强制抽离（不过不建议）
            minChunks: 2,
          }
        }
      },
      // 压缩js
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        })
      ]
    },
    performance: {
      hints: 'warning'
    },
    plugins: [
      // 测速
      new SpeedMeasurePlugin(),
      // 压缩css
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
      // 删除build文件夹
      new CleanWebpackPlugin(
        'dist',
        {
          root: context.resolve('')
        }
      ),
      // 复制文件
      new CopyWebpackPlugin({
        patterns: [
          // 复制favicon到dist
          {
            from: context.resolve(context.spartaConfig.favicon),
            to: context.resolve('dist/')
          }
        ]
      }),
      // 定义全局常量
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          ...process.epaySpartaCliArgv,
          NODE_ENV: 'production',
          ONLINE: ONLINE ? true : false // 一般来说，上线之后埋点会用线上正式的key
        })
      }),
      // 定义全局常量
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.epaySpartaCliArgv)
      }),
      // It will make sprite.svg error
      // new webpack.BannerPlugin('Copyright by 网易支付 https://epay.163.com/'),
    ]
  })

  // analyze的话，进行文件可视化分析
  if (ANALYZE) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    config = merge(config, {
      plugins: [
        new BundleAnalyzerPlugin()
      ]
    })
  }

  return config
}