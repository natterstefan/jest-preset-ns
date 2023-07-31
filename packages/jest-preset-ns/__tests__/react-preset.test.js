const Enzyme = require('enzyme')

describe('jest-preset-ns/presets/react', () => {
  const spy = jest.spyOn(Enzyme, 'configure')

  it('configures enzyme in jest-setup.js', () => {
    require('../presets/react/setup-enzyme')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
