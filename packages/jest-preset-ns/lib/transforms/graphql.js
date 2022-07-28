// inspired by https://github.com/xing/hops/blob/1c6213b5be5517c938b870202dee170e942b9d67/packages/jest-preset/transforms/graphql.js

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
function getLoader() {
  try {
    require.resolve('graphql-tag/loader')
    // Not all users use graphql too therefore we only add the
    // graphql-tag/loader if it is already installed.
    return require('graphql-tag/loader')
  } catch (_) {
    // eslint-disable-next-line no-console
    console.warn('graphql-tag/loader not found')
    return () => {
      return '{}'
    }
  }
}

module.exports = {
  process(src) {
    return { code: getLoader().call({ cacheable() {} }, src) }
  },
}
