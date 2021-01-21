const jest = require('jest')

class TestUnitService {
  constructor(context) {
    this.config = this._mergeJestConfig(context)
  }

  async run() {
    jest.run(this.config)
  }
  
  _mergeJestConfig(context) {
    // Merge default jest and user jest configuration
    const defaultJestConfig = require('./jest.config')
    let spartaJestConfig = {}
    if (context.spartaConfig && context.spartaConfig.jest) {
      spartaJestConfig = context.spartaConfig.jest
    }
    return Object.assign(
      {},
      defaultJestConfig.getConfig(context.webpackConfig),
      spartaJestConfig
    )
  }
}

module.exports = TestUnitService