/**
 * inspired by
 * @see https://github.com/xing/hops/blob/1fbd3fcb4b389efee2f458d4285f52753a553ba2/packages/jest-preset/transforms/babel.js
 */
const { dirname } = require('path')

// TODO: test if https://github.com/xing/hops/commit/e50c5955ab3c54f57cfd08bc4b2689da3b8ddce0 is
// required as well
const babelJest = require('babel-jest').default

module.exports = babelJest.createTransformer({
  presets: [
    // typescript support
    '@babel/preset-typescript',
    [
      // smart preset that allows you to use the latest JavaScript
      '@babel/preset-env',
      {
        modules: 'commonjs',
        useBuiltIns: 'usage',
        // keep in sync with version in package.json
        corejs: '3.21',
        // compile against the current node version
        targets: { node: 'current' },
      },
    ],
    // babel preset for all React plugins
    '@babel/preset-react',
  ],
  plugins: [pluginRenameCoreJS, '@babel/plugin-proposal-class-properties'],
  babelrc: false,
})

/**
 * alias core-js in jest-preset to correct version
 * @see https://github.com/xing/hops/pull/969
 */
function pluginRenameCoreJS() {
  function replaceSource(source) {
    // eslint-disable-next-line no-param-reassign
    source.value = source.value.replace(
      /^core-js/,
      dirname(require.resolve('core-js/package.json')),
    )
  }

  function isRequire(path) {
    if (!path.get('callee').isIdentifier({ name: 'require' })) return false
    if (path.node.arguments.length === 0) return false
    if (!path.get('arguments.0').isStringLiteral()) return false
    return true
  }

  const visitor = {
    ImportDeclaration(path) {
      replaceSource(path.node.source)
    },
    CallExpression(path) {
      if (isRequire(path)) {
        replaceSource(path.node.arguments[0])
      }
    },
  }

  return {
    visitor,
  }
}
