// load the preset's jest-setup file before the custom setup
require('jest-preset-ns/presets/react/jest-setup')
require('jest-preset-ns/presets/react/setup-enzyme')

// for instance, mock `is-ci` in your custom setup
jest.mock('is-ci', () => true)
