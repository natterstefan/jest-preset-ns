import gql from 'graphql-tag'

import foo from '..'

// TODO: only here for testing if the jest preset supports graphql
// eslint-disable-next-line no-unused-vars
import testQuery from './test.graphql'

// TODO: only here for testing if the jest preset supports graphql
// eslint-disable-next-line no-unused-vars
const query = gql`
  {
    users {
      id
      firstName
      lastName
    }
  }
`

describe('foo', () => {
  it('returns bar', () => {
    expect(foo()).toBe('bar')
  })
})
