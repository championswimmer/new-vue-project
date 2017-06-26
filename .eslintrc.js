module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/base',
  ],

  plugins: [
    'html',
    'vue',
  ],
  rules: {
    "semi": ["error", "never"]
  }
}
