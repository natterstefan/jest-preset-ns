const createConfig = require('../create-jest-preset')

const config = createConfig({
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  /**
   * TODO: setupFilesAfterEnv was not working properly.
   *
   * It always threw the missing enzyme adapter error. One must add it
   * manually right now.
   *
   * Find out what eg. amex-jest-preset-react does differently:
   * @see https://github.com/americanexpress/amex-jest-preset-react/tree/v6.0.0
   */
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  // setupFilesAfterEnv: [require.resolve('./jest-setup')],
})

module.exports = config
