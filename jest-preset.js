/**
 * jest-preset.js is required for jest presets
 * @see https://jestjs.io/docs/en/configuration.html#preset-string
 */
const { defaults } = require('jest-config')
const merge = require('lodash.merge')

const config = merge({}, defaults, {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.dt.ts',
    '!src/**/(__mocks__|__stories__|__tests__)/*.{js,jsx,ts,tsx}',
  ],
  // examples: https://github.com/xing/hops/blob/v12.1.1/packages/jest-preset/jest-preset.js#L4-L11
  moduleNameMapper: {
    '^.+\\.(png|gif|jpe?g|webp|html|svg|((o|t)tf)|woff2?|ico)$': require.resolve(
      './mocks/file.js',
    ),
  },
  testMatch: [
    ...defaults.testMatch,
    // add typescript support
    '**/__tests__/**/*.[jt]s(x)?',
    '**/?(*.)+(spec|test).[jt]s(x)?',
  ],
  testPathIgnorePatterns: ['<rootDir>/(dist|es|esm|lib|node_modules|tmp)/'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': require.resolve('./transforms/babel.js'),
    '^.+\\.(ts|tsx)$': require.resolve('ts-jest'),
  },
  setupFiles: [
    require.resolve('regenerator-runtime/runtime'),
    require.resolve('jest-date-mock'),
  ],
})

module.exports = config
