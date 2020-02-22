const preset = require('../jest-preset')

describe('jest-preset-ns', () => {
  it('should export jest-preset.js', () => {
    expect(preset).toBeDefined()
  })

  it('exports proper default settings', () => {
    expect(preset).toStrictEqual({
      automock: false,
      bail: 0,
      browser: false,
      cache: true,
      cacheDirectory: expect.any(String),
      changedFilesWithAncestor: false,
      clearMocks: false,
      collectCoverage: false,
      collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.dt.ts',
        '!src/**/(__mocks__|__stories__|__tests__)/*.{js,jsx,ts,tsx}',
      ],
      coveragePathIgnorePatterns: ['/node_modules/'],
      coverageProvider: 'babel',
      coverageReporters: ['json', 'text', 'lcov', 'clover'],
      errorOnDeprecated: false,
      expand: false,
      forceCoverageMatch: [],
      globals: {},
      haste: {
        computeSha1: false,
        providesModuleNodeModules: [],
        throwOnModuleCollision: false,
      },
      maxConcurrency: 5,
      maxWorkers: '50%',
      moduleDirectories: ['node_modules'],
      moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
      moduleNameMapper: {
        '^.+\\.(png|gif|jpe?g|webp|html|svg|((o|t)tf)|woff2?|ico)$': expect.stringContaining(
          'mocks/file.js',
        ),
      },
      modulePathIgnorePatterns: [],
      noStackTrace: false,
      notify: false,
      notifyMode: 'failure-change',
      prettierPath: 'prettier',
      resetMocks: false,
      resetModules: false,
      restoreMocks: false,
      roots: ['<rootDir>'],
      runTestsByPath: false,
      runner: 'jest-runner',
      setupFiles: [
        expect.stringContaining('node_modules/regenerator-runtime/runtime.js'),
        'jest-date-mock',
      ],
      setupFilesAfterEnv: [],
      skipFilter: false,
      snapshotSerializers: [],
      testEnvironment: 'jest-environment-jsdom',
      testEnvironmentOptions: {},
      testFailureExitCode: 1,
      testLocationInResults: false,
      testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
        '**/__tests__/**/*.[jt]s(x)?',
        '**/?(*.)+(spec|test).[jt]s(x)?',
      ],
      testPathIgnorePatterns: ['<rootDir>/(dist|es|esm|lib|node_modules|tmp)/'],
      testRegex: [],
      testRunner: 'jasmine2',
      testSequencer: '@jest/test-sequencer',
      testURL: 'http://localhost',
      timers: 'real',
      transform: {
        '^.+\\.(js|jsx|mjs)$': expect.stringContaining('transforms/babel.js'),
        '^.+\\.(ts|tsx)$': expect.stringContaining(
          'node_modules/ts-jest/dist/index.js',
        ),
      },
      transformIgnorePatterns: ['/node_modules/'],
      useStderr: false,
      watch: false,
      watchPathIgnorePatterns: [],
      watchman: true,
    })
  })

  describe('mocks', () => {
    it('should export file-mock', () => {
      expect(require('../mocks/file')).toBeDefined()
    })
  })

  describe('transformers', () => {
    it('should export babel transform', () => {
      expect(require('../transforms/babel')).toBeDefined()
    })
  })
})
