module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: [
    '/lib/**/*',
    'jest.config.js',
    'coverage/**/*',
    '.eslintrc.js',
    '.prettierrc.js',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
