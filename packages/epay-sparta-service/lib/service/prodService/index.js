const webpack = require('webpack')

class ProdService {
  constructor(context) {
    this.config = context.webpackConfig
  }

  async run() {
    webpack(this.config, this._compileMessageReport)
  }

  _compileMessageReport(err, stats) {
    if (err) {
      throw err
    }
    // terminal输出样式
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  }
}

module.exports = ProdService