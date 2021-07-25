const { configure } = require('enzyme')
/**
 * unofficial React@17 adapter, until the offical one is released
 *
 * @see https://github.com/enzymejs/enzyme/issues/2429#issuecomment-831006991
 * @see https://github.com/enzymejs/enzyme/pull/2430
 */
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

configure({ adapter: new Adapter() })
