module.exports = {
  'env': {
    'mocha': true
  },
  'globals': {
    'expect': true,
  },
  'extends': [
    'eslint:recommended'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': 0,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'no-trailing-spaces': [
      'error',
      {
        'skipBlankLines': true
      }
    ],
  }
}