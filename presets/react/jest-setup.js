const { configure, mount, render, shallow } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

// Setup Enzyme Adapter
configure({ adapter: new Adapter() })

// TODO: add to docs
// add enzyme methods to global scope
global.shallow = shallow
global.mount = mount
global.render = render
