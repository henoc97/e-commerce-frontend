module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@next/next/recommended',
      'prettier',
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  };
  