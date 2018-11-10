module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error'
  },
  env: {
    'jest/globals': true,
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['jest', 'react'],
  globals: {
    fetch: true,
    workbox: true,
    self: true
  },
  settings: {
    react: {
      version: '16.0'
    }
  }
}
