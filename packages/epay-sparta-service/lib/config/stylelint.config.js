module.exports = {
  'ignoreFiles': [
    '**/*.md'
  ],
  'processors': [
    ['@mapbox/stylelint-processor-arbitrary-tags', { fileFilterRegex: [/\.vue$/] }]
  ],
  'overrides': [
    {
      'files': ['**/*.scss'],
      'customSyntax': 'postcss-scss'
    }
  ],
  'extends': 'stylelint-config-standard-scss',
  'rules': {
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'selector-list-comma-newline-after': null,
    'unit-case': null,
    'comment-empty-line-before': null,
    'no-descending-specificity': null,
    'no-empty-first-line': null,
    'selector-class-pattern': null,
  }
}