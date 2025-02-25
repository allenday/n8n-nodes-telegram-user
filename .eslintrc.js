module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.ts'],
      env: {
        jest: true,
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off'
      }
    }
  ],
  ignorePatterns: ['dist/**/*'],
};
