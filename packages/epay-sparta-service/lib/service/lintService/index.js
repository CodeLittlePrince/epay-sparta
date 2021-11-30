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

  _lintJs() {
    return new Promise((resolve, reject) => {
      info('Linting js and vue ...')
      const cli = new ESLint({
        extensions: ['.vue', '.js']
      })
      const report = cli.executeOnFiles([this.context.resolve('src')])
      const formatter = cli.getFormatter()
      const results = formatter(report.results)
      if (results) {
        console.log(results)
      }
      // Fail once there is a warning or error
      if (report.errorCount || report.warningCount) {
        error('Linting js fail.')
        reject()
        process.exit(1)
      } else {
        resolve()
      }
    })
  }

  _lintStyle() {
    return new Promise((resolve, reject) => {
      info('Linting scss ...')
      stylelint.lint({
        files: path.relative(process.cwd(), 'src') + '/**/*.(vue|scss)',
        syntax: 'scss',
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