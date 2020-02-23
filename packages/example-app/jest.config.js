const baseConfig = require('../../jest.config')

const pack = require('./package.json')

module.exports = {
  ...baseConfig,
  preset: 'jest-preset-ns/presets/default',
  displayName: pack.name,
  modulePaths: ['<rootDir>'],
  name: pack.name,
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
}
