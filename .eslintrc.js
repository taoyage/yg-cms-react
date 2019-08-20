module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 0
  }
};
