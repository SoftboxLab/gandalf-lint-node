module.exports = {
  plugins: [
    'security'
  ],
  extends: [
    'eslint-config-standard',
    'plugin:security/recommended',
    './rules/gandalf'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
