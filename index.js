module.exports = {
  extends: [
    '@softboxlab/eslint-config-gandalf-lint',
    'plugin:security/recommended'
  ],
  plugins: [
    'security'
  ],
  rules: {
    indent: [
      'error',
      4
    ]
  }
}
