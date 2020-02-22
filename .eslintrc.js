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
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
}
