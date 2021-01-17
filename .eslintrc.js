module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:jest/recommended",
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "quotes": ["error", "single"],
  }
};