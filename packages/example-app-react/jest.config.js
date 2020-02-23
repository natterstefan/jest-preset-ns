const baseConfig = require('../../jest.config')

const pack = require('./package.json')

module.exports = {
  ...baseConfig,
  preset: 'jest-preset-ns/presets/react',
  displayName: pack.name,
  modulePaths: ['<rootDir>'],
  name: pack.name,
  rootDir: '.',
}
