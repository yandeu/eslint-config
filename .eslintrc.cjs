const config = require('./index.cjs')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    quotes: ['error', 'double'],
    semi: ['error', 'always']
  }
}
