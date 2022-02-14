// https://eslint.org/docs/developer-guide/nodejs-api
const { ESLint } = require('eslint')
const stylelint = require('stylelint')
const { done, info, error } = require('../../utils')

class LintService {
  constructor(context) {
    this.context = context
  }

  async run() {
    await this._lintJs()
    await this._lintStyle()
    this._doneTip()
  }

  async _lintJs() {
    info('Linting js and vue ...')
    const cli = new ESLint({
      extensions: ['.vue', '.js']
    })
    const files = await this._getJslintTargetFiles(cli)
    const report = await cli.lintFiles(files)
    const formatter = await cli.loadFormatter('stylish')
    const results = formatter.format(report)
    if (results) {
      console.log(results)
    }
    // Fail once there is a warning or error
    let errorCount = 0
    let warningCount = 0
    report.forEach(item => {
      errorCount += item.errorCount
      warningCount += item.warningCount
    })
    if (errorCount || warningCount) {
      error('Linting js fail.')
      process.exit(1)
    }
  }

  _lintStyle() {
    return new Promise((resolve, reject) => {
      info('Linting scss ...')

      const files = this._getStylelintTargetFiles() || []
      if (files.length === 0) return resolve()

      stylelint.lint({
        files
      }).then(function(res) {
        if (res.errored) {
          const stylelintOutput = require('stylelint/lib/formatters/stringFormatter')(res.results)
          console.log(stylelintOutput.substr(0, stylelintOutput.length - 1))
          error('Linting scss fail.')
          reject()
          process.exit(1)
        } else {
          resolve()
        }
      }).catch(err => {
        error(err)
        reject()
        process.exit(1)
      })
    })
  }

  async _getJslintTargetFiles(cli) {
    if (this._useLintStaged()) {
      const files = this._getLintFiles()

      const promiseList = files.map(filePath => {
        return cli.isPathIgnored(filePath)
      })
      const ignoreBooleanList = await Promise.all(promiseList)

      return files.filter((filePath, index) => {
        return !ignoreBooleanList[index]
      })
    } else {
      return [this.context.resolve('src')]
    }
  }

  _getStylelintTargetFiles() {
    if (this._useLintStaged()) {
      return this._getLintFiles().filter(file => {
        return /\.(html|vue|scss|css)$/.test(file)
      })
    } else {
      return this.context.resolve('src/**/*.(html|vue|scss|css)')
    }
  }

  _useLintStaged() {
    return process.env['LINT_STAGED'] === 'ON'
  }

  _getLintFiles() {
    return JSON.parse(process.env['lintFiles'])
  }

  _doneTip() {
    done('Linting succeed !')
  }
}

module.exports = LintService