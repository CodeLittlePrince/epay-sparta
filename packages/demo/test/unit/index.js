/**
 * karma入口文件
 */
import Vue from 'vue'

Vue.config.productionTip = false

const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect
chai.use(require('sinon-chai'))

window.sinon = sinon
window.expect = expect

// require all test files (files that ends with .spec.js)
// 语法说明：https://doc.webpack-china.org/guides/dependency-management/#require-context
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files which in the src/common/js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContexts = [
  require.context('common/js/', true, /\.js$/),
  require.context('componentsBase/', true, /\.(js|vue)$/),
]

srcContexts.forEach(srcContext => {
  srcContext.keys().forEach(srcContext)
})