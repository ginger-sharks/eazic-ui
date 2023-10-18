module.exports = {
  root: true,
  plugins: ['stylelint-scss'],
  extends: 'stylelint-config-recommended-vue/scss',
  ignoreFiles: ['src/stories/*', 'src/assets/*'],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'declaration-empty-line-before': null,
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'unit-disallowed-list': ['px']
  }
}
