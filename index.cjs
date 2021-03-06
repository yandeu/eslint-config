module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'sort-imports': 'warn'
  }
}
