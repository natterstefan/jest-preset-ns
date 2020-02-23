const path = require('path')

module.exports = {
  extends: ['eslint-config-ns'],
  rules: {
    'import/extensions': 0,
    'no-use-before-define': 0,
    'sort-keys': 0,
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'global-require': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages'),
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
}
