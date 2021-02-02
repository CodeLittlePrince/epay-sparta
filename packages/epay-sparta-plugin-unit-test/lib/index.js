const jest = require('jest')

class TestUnitService {
  async run() {
    jest.run(process.argv.slice(2).slice(1))
  }
}

module.exports = TestUnitService