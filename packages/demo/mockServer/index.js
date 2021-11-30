const proxyServerConfig = require('../config/proxyServer')
const path = require('path')
const mockRoot = path.join(__dirname, './mockData')
const MockMaster = require('mock-master')
const mockSwitchMap = require('./mockSwitchMap')

const mock = new MockMaster({
  root: mockRoot,
  port: proxyServerConfig.port,
  switchMap: mockSwitchMap,
  apiPrefix: '/api',
  apiSuffix: '.json'
})
mock.start()