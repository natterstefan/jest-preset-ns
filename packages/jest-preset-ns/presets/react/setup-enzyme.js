/**
 * ATTENTION: The support for enzyme will be removed in one of the  next major
 * versions!
 *
 * Visit https://github.com/natterstefan/jest-preset-ns/issues/61 for more
 * details.
 */
const { configure } = require('enzyme')
/**
 * Unofficial React@17 adapter
 *
 * Docs
 * @see https://github.com/enzymejs/enzyme/issues/2429#issuecomment-831006991
 * @see https://github.com/enzymejs/enzyme/pull/2430
 */
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

configure({ adapter: new Adapter() })
