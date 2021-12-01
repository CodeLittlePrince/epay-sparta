module.exports = {
  'ignoreFiles': [
    '**/*.js',
    '**/*.md'
  ],
  'processors': ['@mapbox/stylelint-processor-arbitrary-tags'],
  'plugins': [
    'stylelint-scss'
  ],
  'extends': 'stylelint-config-standard-scss',
  'rules': {
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': ['function', 'if', 'each', 'include', 'mixin', 'for']
      }
    ],
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'selector-list-comma-newline-after': null,
    'unit-case': null,
    'comment-empty-line-before': null,
    'no-descending-specificity': null,
  }
}