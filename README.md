# jest-preset-ns

An opinionated [Jest preset](https://facebook.github.io/jest/docs/configuration.html#preset-string)
for both react and non-react projects.

It comes with two default presets with both babel and typescript support.

## Features

- default preset and preset for react are available
- modern javascript (babel) and typescript (ts-jest) support
- mocks files (eg. png, gif, jpg, ...) and date ([jest-date-mock][2])
  automatically
- looks for tests in `__tests__` and for `*.(spec|test).[jt]s(x)?` files
- easy extendable

## Installation

```bash
npm install --save-dev jest-preset-ns jest
# or
yarn add jest-preset-ns jest --dev
```

## Usage

Add `jest-preset-ns` as [preset](https://facebook.github.io/jest/docs/en/configuration.html#preset-string)
to your Jest config. This can be done by adding it to your `package.json` or
`jest.config.js`:

```json
// package.json
{
  "jest": {
    "preset": "jest-preset-ns"
  }
}
```

```js
// jest.config.js
module.exports = {
  preset: 'jest-preset-ns',
  // or: preset: 'jest-preset-ns/presets/default'
  // [...]
}
```

Feel free to extend the `"jest"`-configuration object along the way with your
own settings.

For running tests, use the [Jest CLI](https://jestjs.io/docs/en/cli).

## Compatibility

This package is compatible only with React 16+.

## Helpful tips

- [extend and adjust ts configuration][1]
- [prevent logging all the JSDOM internal errors](https://gist.github.com/natterstefan/8294b498afa35723ca92f3bf8451e533#file-jest-setup-ts)

## References

- [jest getting-started](https://jestjs.io/docs/en/22.x/getting-started.html)
- [ts-jest preset][1] ([ts-jest presets source](https://github.com/kulshekhar/ts-jest/tree/v25.2.0/presets),
  [ts-jest config source](https://github.com/kulshekhar/ts-jest/tree/v25.2.0/src/config))
- [jest defaults](https://github.com/facebook/jest/blob/v25.1.0/packages/jest-config/src/Defaults.ts)
- [hops jest-preset](https://github.com/xing/hops/blob/v12.1.1/packages/jest-preset)
- [amex-jest-preset](https://github.com/americanexpress/amex-jest-preset/tree/v6.0.0)
- [amex-jest-preset-react](https://github.com/americanexpress/amex-jest-preset-react/tree/v6.0.0)

[1]: https://kulshekhar.github.io/ts-jest/user/config/
[2]: https://www.npmjs.com/package/jest-date-mock
