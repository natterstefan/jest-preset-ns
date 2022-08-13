const createPreset = require('../create-jest-preset')

/**
 * Inspired by
 * @see https://github.com/americanexpress/amex-jest-preset-react/tree/61ae3106b8ae3483b8953b01fc32d70660af6688
 *
 * @type {import('@jest/types').Config.InitialOptions}
 */
const jestReactConfig = {
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: [require.resolve('../../../presets/react/jest-setup.js')],
  /**
   * Alternative:
   * @see {@link https://www.npmjs.com/package/jest-environment-jsdom-global jest-environment-jsdom-global}
   */
  testEnvironment: 'jest-environment-jsdom',
}

const config = createPreset(jestReactConfig)

module.exports = config
