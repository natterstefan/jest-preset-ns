/* eslint-disable global-require */
const semver = require('semver')
const reactVersion = require('react/package.json').version

/**
 * ATTENTION: The support for enzyme will be removed in the next major version!
 * Visit https://github.com/natterstefan/jest-preset-ns/issues/61 for more
 * details.
 */
if (semver.lt(reactVersion, '18.0.0')) {
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

/**
 * Custom jest matchers to test the state of the DOM
 *
 * @see https://github.com/testing-library/jest-dom
 * @see https://www.carlrippon.com/using-jest-and-rtl-with-react-typescript/
 */
require('@testing-library/jest-dom')
