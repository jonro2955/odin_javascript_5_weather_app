module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [0, 'ignorePackages'],
    'comma-dangle': ['off', 'never'],
    'consistent-return': ['off'],
    'no-plusplus': ['off'],
  },
};
