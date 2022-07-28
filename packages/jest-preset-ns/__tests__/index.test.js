const merge = require('lodash.merge')

const preset = require('../jest-preset')
const presetReact = require('../presets/react/jest-preset')

describe('jest-preset-ns', () => {
  const defaultPreset = {
    automock: false,
    bail: 0,
    cache: expect.any(Boolean),
    cacheDirectory: expect.any(String),
    changedFilesWithAncestor: false,
    ci: expect.any(Boolean),
    clearMocks: false,
    collectCoverage: false,
    collectCoverageFrom: [
      '!**/node_modules/**',
      '!src/**/*.dt.ts',
      '!src/**/(__mocks__|__stories__|__tests__)/*.{js,jsx,ts,tsx}',
      'src/**/*.{js,jsx,ts,tsx}',
    ],
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'babel',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    detectLeaks: false,
    detectOpenHandles: false,
    errorOnDeprecated: false,
    expand: false,
    extensionsToTreatAsEsm: expect.any(Array),
    fakeTimers: {
      enableGlobally: false,
    },
    forceCoverageMatch: [],
    globals: {},
    haste: {
      computeSha1: false,
      enableSymlinks: false,
      forceNodeFilesystemAPI: true,
      throwOnModuleCollision: false,
    },
    injectGlobals: true,
    listTests: false,
    maxConcurrency: 5,
    maxWorkers: '50%',
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: [
      'js',
      'mjs',
      'cjs',
      'jsx',
      'ts',
      'tsx',
      'json',
      'node',
    ],
    moduleNameMapper: {
      '^.+\\.(png|gif|jpe?g|webp|html|svg|((o|t)tf)|woff2?|ico)$':
        expect.stringContaining('mocks/file.js'),
    },
    modulePathIgnorePatterns: ['npm-cache', '.npm'],
    noStackTrace: false,
    notify: false,
    notifyMode: 'failure-change',
    passWithNoTests: false,
    prettierPath: 'prettier',
    resetMocks: false,
    resetModules: false,
    restoreMocks: false,
    roots: ['<rootDir>'],
    runTestsByPath: false,
    runner: 'jest-runner',
    setupFiles: ['regenerator-runtime/runtime', 'jest-date-mock'],
    setupFilesAfterEnv: [],
    skipFilter: false,
    slowTestThreshold: 5,
    snapshotSerializers: [],
    testEnvironment: 'node',
    testEnvironmentOptions: {},
    testFailureExitCode: 1,
    testLocationInResults: false,
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)',
      '**/__tests__/**/*.[jt]s(x)?',
      '**/?(*.)+(spec|test).[jt]s(x)?',
    ],
    testPathIgnorePatterns: [
      '<rootDir>/(build|dist|es|esm|lib|node_modules|tmp)/',
    ],
    testRegex: [],
    testRunner: 'jest-circus/runner',
    testSequencer: '@jest/test-sequencer',
    transform: {
      '^.+\\.(js|jsx|mjs)$': expect.stringContaining('transforms/babel.js'),
      '^.+\\.(gql|graphql)$': expect.stringContaining('transforms/graphql.js'),
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
    useStderr: false,
    watch: false,
    watchPathIgnorePatterns: [],
    watchman: true,
  }

  it('should export jest-preset.js', () => {
    expect(preset).toBeDefined()
  })

  it('exports proper default settings', () => {
    expect(preset).toStrictEqual(defaultPreset)
  })

  it('exports proper react settings', () => {
    expect(presetReact).toStrictEqual(
      merge({}, defaultPreset, {
        moduleNameMapper: {
          '\\.(css|scss)$': 'identity-obj-proxy',
        },
        setupFilesAfterEnv: [
          expect.stringContaining('presets/react/jest-setup.js'),
        ],
        snapshotSerializers: ['enzyme-to-json/serializer'],
        testEnvironment: 'jest-environment-jsdom',
      }),
    )
  })

  describe('mocks', () => {
    it('should export file-mock', () => {
      expect(require('../lib/mocks/file')).toBeDefined()
    })
  })

  describe('transformers', () => {
    it('should export babel transform', () => {
      expect(require('../lib/transforms/babel')).toBeDefined()
    })
  })
})
