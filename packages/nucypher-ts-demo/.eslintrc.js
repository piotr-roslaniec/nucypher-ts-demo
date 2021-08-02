module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
    browser: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['test/**/*.{js,ts,tsx}'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-unused-expressions': 'off',
      },
    },
  ],
}
