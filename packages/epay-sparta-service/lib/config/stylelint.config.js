module.exports = {
  'ignoreFiles': [
    '**/*.js',
    '**/*.md'
  ],
  'processors': [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {
        fileFilterRegex: [/\.html$/, /\.vue$/]
      }
    ]
  ],
  'overrides': [
    {
      'files': ['**/*.scss'],
      'customSyntax': 'postcss-scss'
    },
    {
      'files': ['*.html', '**/*.html'],
      'customSyntax': 'postcss-html'
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
    'alpha-value-notation': null,
    'no-eol-whitespace': null,
    'function-url-quotes': null,
    'keyframes-name-pattern': null,
    'property-no-vendor-prefix': null,
    'scss/dollar-variable-empty-line-before': null,
    'color-function-notation': null,
  }
}