const proxyServerConfig = require('./config/proxyServer')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  favicon: 'favicon.ico',
  webpack: {
    entry: {
      app: ['src/index.js']
    },
    alias: {
      '@': resolve(''),
    },
    pages: [
      {
        filename: 'index.html',
        template: 'src/index.html'
      }
    ],
    publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/',
  },
  devServer: {
    proxy: [{
      context: ['/api', '/mock-switch'],
      target: `http://localhost:${proxyServerConfig.port}`
    }],
    historyApiFallback: true,
  },
  // 参照karma配置文档 http://karma-runner.github.io/4.0/config/configuration-file.html
  karma: {
    browsers: ['Chrome']
  }
}