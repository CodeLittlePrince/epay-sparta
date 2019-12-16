const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const devConfig = require('./config')

class DevService {
  constructor(context) {
    this.context = context
  }

  async run() {
    const {
      ip,
      devServerPort,
      devLocalHost,
      devServerHost,
      proxyServerHost,
    } = await devConfig.getDevConfig()
    // Inject js which hot-reload need into webpack entry
    this._injectDevHotReloadEntries(devServerHost)
    // Compile webpack
    const compiler = webpack(this.context.webpackConfig)
    // Tips of webpack compile done
    this._webpackCompileDoneTip(compiler, devLocalHost, devServerHost, proxyServerHost)
    // DevServer initialization
    const devServer = this._initDevServer(compiler, proxyServerHost)
    // Listen node process signal to make sure devServer close
    this._listenProcessSignalForServerClose(devServer)
    // Listen devServer error event and give a tip if error occur
    this._listenDevServerErrorForTip(devServer, ip, devServerPort)
  }

  _injectDevHotReloadEntries(publicUrl) {
    // Inject dev & hot-reload middleware entries
    const sockjsUrl = `?${publicUrl}/sockjs-node`
    // Inject dev/hot client
    this.context.webpackConfig.entry.push(
      require.resolve('webpack-dev-server/client') + sockjsUrl,
      require.resolve('webpack/hot/dev-server')
    )
  }

  _initDevServer(compiler, proxyServerHost) {
    let devServerConfig = {}
    if (this.context.spartaConfig && this.context.spartaConfig.devServer) {
      devServerConfig = this.context.spartaConfig.devServer
    }
    return new WebpackDevServer(
      compiler,
      Object.assign({},
        {
          clientLogLevel: 'none',
          quiet: true,
          proxy: [{
            context: ['/api', '/mock-switch'],
            target: proxyServerHost,
            secure: false,
            changeOrigin: true
          }],
          historyApiFallback: false,
          disableHostCheck: true, // For mobile phone visit
          contentBase: this.context.resolve('dev'), // 本地服务器所加载的页面所在的目录(HMR很依赖它)
          watchContentBase: true,
          inline: true,
          hot: true  // Work with 'HotModuleReplacementPlugin'
        },
        devServerConfig)
    )
  }

  _webpackCompileDoneTip(compiler, devLocalHost, devServerHost, proxyServerHost) {
    compiler.hooks.done.tap('Webpack devServer serve', stats => {
      if (stats.hasErrors()) {
        return
      }
      console.log()
      console.log('  App running at:')
      console.log(`  - Local:   ${chalk.cyan(devLocalHost)}`)
      console.log(`  - Network: ${chalk.cyan(devServerHost)}`)
      console.log(`  - Mock:    ${chalk.cyan(proxyServerHost)}`)
      console.log()
      console.log('  Note that the development build is not optimized.')
      console.log(`  To create a production build, and take a view of files' size, run ${chalk.cyan('npm run analyze')}.`)
      console.log()
    })
  }

  _listenProcessSignalForServerClose(devServer) {
    ['SIGINT', 'SIGTERM'].forEach(signal => {
      process.on(signal, () => {
        devServer.close(() => {
          process.exit(0)
        })
      })
    })
  }

  _listenDevServerErrorForTip(server, ip, devServerPort) {
    server.listen(devServerPort, ip, err => {
      err && console.log(err)
    })
  }
}

module.exports = DevService