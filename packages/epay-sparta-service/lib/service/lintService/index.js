// https://eslint.org/docs/developer-guide/nodejs-api
const path = require('path')
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
    const report = await cli.lintFiles([this.context.resolve('src')])
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
      stylelint.lint({
        files: path.relative(process.cwd(), 'src') + '/**/*.(html|vue|scss|css)'
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

  _doneTip() {
    done('Linting succeed !')
  }
}

module.exports = LintService