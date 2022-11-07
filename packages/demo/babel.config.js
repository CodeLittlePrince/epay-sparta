module.exports = {
  ...require('@epay-sparta/cli-service/lib/config/babel.config'),
  'env': {
    'test': {
      'plugins': [
        ['babel-plugin-istanbul', {
          'extension': ['.js', '.vue']
        }]
      ]
    }
  },
}