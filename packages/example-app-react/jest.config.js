const baseConfig = require('../../jest.config')

const pack = require('./package.json')

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...baseConfig,
  preset: 'jest-preset-ns/presets/react',
  displayName: pack.name,
  modulePaths: ['<rootDir>'],
  rootDir: '.',
}
