import React from 'react'
import { mount } from 'enzyme'

import App from '..'

describe('App', () => {
  it('renders', () => {
    const wrapper = mount(<App />)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
