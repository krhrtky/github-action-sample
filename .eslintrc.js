module.exports = {
  env: {
    jest: true,
    es6: true,
    node: true,
  },
  plugins: ['jest'],
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
