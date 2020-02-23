import foo from '..'

describe('foo', () => {
  it('returns bar', () => {
    expect(foo()).toStrictEqual('bar')
  })
})
