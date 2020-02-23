/**
 * inspired by ts-jest presets
 * @see https://github.com/kulshekhar/ts-jest/blob/v25.2.0/presets/index.js
 */
const config = require('../lib/configs/default')
const configReact = require('../lib/configs/react')

module.exports = {
  get defaults() {
    return config
  },
  get react() {
    return configReact
  },
}
