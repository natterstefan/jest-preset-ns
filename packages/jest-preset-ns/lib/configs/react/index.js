/**
 * TODO:
 * - add: testEnvironment: 'jest-environment-jsdom-global',
 */
const createPreset = require('../create-jest-preset')

const config = createPreset({
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  /**
   * TODO: setupFilesAfterEnv was not working properly.
   *
   * It always threw the missing enzyme adapter error. One must add it
   * manually right now.
   *
   * Find out what eg. amex-jest-preset-react does differently:
   * @see https://github.com/americanexpress/amex-jest-preset-react/tree/v6.0.0
   *
   * This did not work as well:
   * setupFilesAfterEnv: ['jest-preset-ns/presets/react/jest-setup.js'],
   */
  setupFilesAfterEnv: [require.resolve('../../../presets/react/jest-setup.js')],
  testEnvironment: 'jest-environment-jsdom',
})

module.exports = config
