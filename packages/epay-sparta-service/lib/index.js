const path = require('path')
const fs = require('fs')
const cloneDeep = require('lodash.clonedeep')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const { error } = require('./utils')

class Service {
  constructor() {
    this.cliArgs = {}
    this.spartaConfig = null
    this.webpackConfig = {}
  }
  
  start(mode, args) {
    this.cliArgs = args
    let subServer = null
    let SubService = null
    let defaultWebpackConfig = null
    // According to environment mode, choose the related service to run.
    process.env.NODE_ENV = mode || ''
    // Load sparta.config.js after process.env.NODE_ENV has set.
    this._loadSpartaConfig()
    // Run proper service depends on different mode.
    switch (mode) {
    case 'development':
      defaultWebpackConfig = require('./webpack/webpack.config.dev').getConfig(this)
      SubService = require('./service/devService')
      break
    case 'production':
      defaultWebpackConfig = require('./webpack/webpack.config.prod').getConfig(this)
      SubService = require('./service/prodService')
      break
    case 'test:unit':
      process.env.NODE_ENV = 'test'
      process.env.BABEL_ENV = 'test'
      defaultWebpackConfig = require('./webpack/webpack.config.test').getConfig(this)
      SubService = require('@epay-sparta/cli-plugin-unit-test')
      break
    case 'test:e2e':
      SubService = require('@epay-sparta/cli-plugin-e2e-test')
      break
    // If mode is not the one of values unpon, show error tip.
    default:
      this._tipModeError(mode)
      process.exit(1)
    }
    if (defaultWebpackConfig) {
      this._mergeWebpackConfig(defaultWebpackConfig, mode)
    }
    subServer = new SubService(this)
    subServer.run()
  }

  resolve(dir) {
    return path.resolve(process.cwd(), dir)
  }

  require(path) {
    return fs.existsSync(path) ? require(path) : {}
  }

  _loadSpartaConfig() {
    const spartaConfigPath = this.resolve('sparta.config.js')
    this.spartaConfig = this.require(spartaConfigPath)
  }

  _tipModeError(mode) {
    error(
      `Mode value '${mode}' is not allowed.\n` +
      'Mode must be one of: \n' +
      [
        'development',
        'production',
        'test:unit',
        'test:e2e',
      ].join(', ').concat('.')
    )
  }

  _mergeWebpackConfig(defaultWebpackConfig, mode) {
    // Load user configuration
    const spartaWebpackConfig = this._loadSpartaWebpackConfig(mode)

    // Merge configs
    this.webpackConfig = merge(
      this.webpackConfig,
      defaultWebpackConfig,
      spartaWebpackConfig
    )
  }

  _loadSpartaWebpackConfig(mode) {
    if (this.spartaConfig) {
      return this._getConvertSpartaWebpackConfig(mode)
    }
    return {}
  }

  _getConvertSpartaWebpackConfig(mode) {
    // Deep clone user webpack config
    const spartaWebpackConfigCopy = cloneDeep(this.spartaConfig.webpack)
    if (spartaWebpackConfigCopy) {
      const config = spartaWebpackConfigCopy
      // Convert entry to array type
      this._convertAllTypeOfEntryToArrayType(config)
      // Convert pages to HtmlWebpackPlugin
      this._convertPagesToHtmlWebpackPlugin(config, mode)
      // Convert publicPath to output.publicPath
      this._convertPublicPathToOutputPublicPath(config)
      // Convert alias to resolve.alias
      this._convertAliasToResolveAlias(config)
      return config
    }
    return {}
  }

  /**
   * Covert all types of entry to array type
   * e.g.
   * '/index.js'          => ['/index/js']
   * [{app: '/index.js'}] => ['/index.js']
   * {app: '/index.js'}   => ['/index.js']
   *
   * @param {object} spartaWebpackConfigCopy sparta.config.js webpack configuration
   */
  _convertAllTypeOfEntryToArrayType(spartaWebpackConfigCopy) {
    const config = spartaWebpackConfigCopy
    config.entry = config.entry || 'src/index.js'
    let entryFiles = config.entry
    if (typeof config.entry === 'string') {
      entryFiles = [config.entry]
    } else if (Array.isArray(config.entry)) {
      entryFiles = config.entry
    } else {
      entryFiles = Object.values(config.entry || []).reduce((allEntries, curr) => allEntries.concat(curr), [])
    }
    entryFiles = entryFiles.map(file => this.resolve(file))
    config.entry = entryFiles
  }

  /**
   * Convert pages of webpack configuration's to webpack plugin - HtmlWebpackPlugin
   * @param {object} spartaWebpackConfigCopy sparta.config.js webpack configuration
   * @param {string} mode excute mode
   */
  _convertPagesToHtmlWebpackPlugin(spartaWebpackConfigCopy, mode) {
    const config = spartaWebpackConfigCopy
    
    if (mode.startsWith('test')) {
      delete config.pages
      return
    }

    if (!config.hasOwnProperty('pages')) {
      // Default pages
      config.pages = [{
        filename: 'index.html',
        template: 'src/index.html'
      }]
    }
    this.webpackConfig.plugins = config.pages.map(pageConfig => {
      if (mode === 'production') {
        pageConfig = Object.assign({}, pageConfig, {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeScriptTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true,
          }
        })
      }
      return new HtmlWebpackPlugin(pageConfig)
    })
    delete config.pages
  }

  _convertPublicPathToOutputPublicPath(spartaWebpackConfigCopy) {
    const config = spartaWebpackConfigCopy
    if (config.hasOwnProperty('publicPath')) {
      const { publicPath, crossOriginLoading } = config
      config.output = {}
      config.output.publicPath = publicPath
      config.output.crossOriginLoading = crossOriginLoading || false
      delete config.publicPath
      delete config.crossOriginLoading
    }
  }

  _convertAliasToResolveAlias(spartaWebpackConfigCopy) {
    const config = spartaWebpackConfigCopy
    if (config.hasOwnProperty('alias')) {
      const { alias } = config
      config.resolve = {}
      config.resolve.alias = alias
      delete config.alias
    }
  }
}

module.exports = Service
