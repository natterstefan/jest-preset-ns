const Enzyme = require('enzyme')

jest.mock('react/package.json', () => ({
  version: '17.0.0',
}))

describe('jest-preset-ns/presets/react', () => {
  const spy = jest.spyOn(Enzyme, 'configure')

  it('configures enzyme in jest-setup.js', () => {
    require('../presets/react/jest-setup')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
