/* eslint-disable global-require */
const semver = require('semver')
const colors = require('colors')
const reactVersion = require('react/package.json').version

if (semver.lt(reactVersion, '18.0.0')) {
  // eslint-disable-next-line no-console
  console.log(
    colors.red(
      'ATTENTION: Enzyme is deprecated and its support will be removed in the next major version! Visit https://github.com/natterstefan/jest-preset-ns/issues/61 for more details.',
    ),
  )

  const { configure } = require('enzyme')
  /**
   * unofficial React@17 adapter, until the offical one is released
   *
   * @see https://github.com/enzymejs/enzyme/issues/2429#issuecomment-831006991
   * @see https://github.com/enzymejs/enzyme/pull/2430
   */
  const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

  configure({ adapter: new Adapter() })
}
