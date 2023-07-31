/**
 * jest-preset.js is required for jest presets
 * @see https://jestjs.io/docs/en/configuration.html#preset-string
 *
 * partially inspired by
 * @see https://github.com/americanexpress/amex-jest-preset/blob/v6.0.0/jest-preset.js
 * @see https://github.com/xing/hops/blob/4cfaba925984ea89ce520a3ddc9ea9810b10721b/packages/jest-preset/jest-preset.js
 */
const isCI = require('is-ci')
const semver = require('semver')
const colors = require('colors')
const merge = require('lodash.merge')
const importFrom = require('import-from')
const jestVersion = require('jest/package.json').version

/**
 * Returns undefined instead of throwing when the module can't be found.
 *
 * TODO: find proper type
 * @type {any}
 */
const jestConfig = importFrom.silent(require.resolve('jest'), 'jest-config')

if (!jestConfig) {
  throw new Error(
    colors.red('Could not initialize jest-preset-ns. jest-config is missing.'),
  )
}

if (semver.lt(jestVersion, '29.0.0')) {
  // eslint-disable-next-line no-console
  console.log(
    colors.red(
      'Error: You are using an unsupported version of Jest! Please upgrade to Jest v29.',
    ),
  )
}

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const jestPresetConfig = {
  cache: !isCI,
  // useful as it eliminates issues caused by several projects sharing the same Jest cache on CI builds
  cacheDirectory: '<rootDir>/.jest-cache',
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!src/**/*.dt.ts',
    '!src/**/(__mocks__|__stories__|__tests__)/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  // examples: https://github.com/xing/hops/blob/v12.1.1/packages/jest-preset/jest-preset.js#L4-L11
  moduleNameMapper: {
    '^.+\\.(png|gif|jpe?g|webp|html|svg|((o|t)tf)|woff2?|ico)$':
      require.resolve('../mocks/file.js'),
  },
  // prevents issues on CI server where npm-cache may be shared across build workspaces
  modulePathIgnorePatterns: ['npm-cache', '.npm'],
  // note: require.resolve is not necessary for node_modules
  setupFiles: ['regenerator-runtime/runtime', 'jest-date-mock'],
  // done for performance reasons as the full jsdom environment is not needed for most tests
  // @see https://github.com/americanexpress/amex-jest-preset
  testEnvironment: 'node',
  testMatch: [
    ...jestConfig.defaults.testMatch,
    '**/__tests__/**/*.[jt]s(x)?',
    '**/?(*.)+(spec|test).[jt]s(x)?',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/(build|dist|es|esm|lib|node_modules|tmp)/',
  ],
  transform: {
    '^.+\\.(js|jsx|mjs)$': require.resolve('../transforms/babel.js'),
    '^.+\\.(gql|graphql)$': require.resolve('../transforms/graphql.js'),
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

const config = merge({}, jestConfig.defaults, jestPresetConfig)

const createPreset = options => merge({}, config, options)

module.exports = createPreset
