module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: [
      'error',
      4
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__'
        ]
      }
    ]
  }
}
