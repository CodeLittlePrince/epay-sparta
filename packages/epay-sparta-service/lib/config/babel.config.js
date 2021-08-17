module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'modules': false,
        'useBuiltIns': 'usage',
        'corejs': {
          'version': 3,
          'proposals': true
        }
      }
    ]
  ],
  'env': {
    'test': {
      'plugins': [
        ['babel-plugin-istanbul', {
          'extension': ['.js', '.vue']
        }]
      ]
    }
  }
}