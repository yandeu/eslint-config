module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: 'eslint:recommended',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    'no-unused-vars': 'off',
    'prefer-const': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'sort-imports': 'warn'
  }
}
