# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## v3.0.0 (2023-07-31)

#### :rocket: New Feature

- `example-app-react`, `example-app`, `jest-preset-ns`
  - [#118](https://github.com/natterstefan/jest-preset-ns/pull/118) feat:
    updated dependencies, incl. min required Jest version 29
    ([@natterstefan](https://github.com/natterstefan))
  - [#109](https://github.com/natterstefan/jest-preset-ns/pull/109) feat: min.
    required node version >=18
    ([@natterstefan](https://github.com/natterstefan))

#### Committers: 1

- Stefan Natter ([@natterstefan](https://github.com/natterstefan))

## v2.2.0 (2022-10-26)

#### :rocket: New Feature

- `example-app-react`, `example-app`, `jest-preset-ns`
  - [#76](https://github.com/natterstefan/jest-preset-ns/pull/76) feat: added
    support for node 18 ([@natterstefan](https://github.com/natterstefan))

#### Committers: 1

- Stefan Natter ([@natterstefan](https://github.com/natterstefan))

## v2.1.1 (2022-08-14)

#### :bug: Bug Fix

- `jest-preset-ns`
  - removed enzyme warning log in jest-setup (react)
    ([@natterstefan](https://github.com/natterstefan))

#### Committers: 1

- Stefan Natter ([@natterstefan](https://github.com/natterstefan))

## v2.1.0 (2022-08-14)

#### :rocket: New Feature

- `jest-preset-ns`
  - [#62](https://github.com/natterstefan/jest-preset-ns/pull/62) feat: marked
    enzyme as deprecated and added @testing-library/\* to jest.setup
    ([@natterstefan](https://github.com/natterstefan))

#### Committers: 1

- Stefan Natter ([@natterstefan](https://github.com/natterstefan))

## v2.0.0 (2022-07-28)

#### :rocket: New Feature

- `example-app-react`, `example-app`, `jest-preset-ns`
  - [#55](https://github.com/natterstefan/jest-preset-ns/pull/55) feat: upgraded
    jest@28 ([@natterstefan](https://github.com/natterstefan))

#### Committers: 1

- Stefan Natter ([@natterstefan](https://github.com/natterstefan))

## v1.1.0 (2022-02-01)

#### :rocket: New Feature

- `example-app`, `jest-preset-ns`
  - [#49](https://github.com/natterstefan/jest-preset-ns/pull/49) feat: added
    .gql and .graphql support ([@natterstefan](https://github.com/natterstefan))
- `example-app-react`, `example-app`, `jest-preset-ns`
  - [#46](https://github.com/natterstefan/jest-preset-ns/pull/46) feat: updated
    dependencies and set min. required Node version to "^14.17 || ^16.x"
    ([@natterstefan](https://github.com/natterstefan))

# [1.0.0](https://github.com/natterstefan/jest-preset-ns/compare/v0.2.0...v1.0.0) (2021-08-03)

### Features

- added support for React@17 (dropped React@16)
  ([#21](https://github.com/natterstefan/jest-preset-ns/issues/21))
  ([753e9b3](https://github.com/natterstefan/jest-preset-ns/commit/753e9b34d63cd46595a61f743e0ed4b73e165d14))
- updated Jest (latest v27.x) and require React ^17.0.2
  ([#22](https://github.com/natterstefan/jest-preset-ns/issues/22))
  ([62e366c](https://github.com/natterstefan/jest-preset-ns/commit/62e366c514c4bf0b1fdeec9b40100959f1a7ca9b))

# [0.2.0](https://github.com/natterstefan/jest-preset-ns/compare/v0.1.0...v0.2.0) (2020-05-24)

### Features

- added build to testPathIgnorePatterns, updated corejs (babel)
  ([44f716a](https://github.com/natterstefan/jest-preset-ns/commit/44f716a351a305e13a552c975c73ad6d158bbb83))
- optimised prettier config
  ([2d0d18f](https://github.com/natterstefan/jest-preset-ns/commit/2d0d18f652381226cbcbe0e0f2a427dc7b0d2f2a))
- updated all (dev)Dependencies
  ([7d1398e](https://github.com/natterstefan/jest-preset-ns/commit/7d1398efea6f198d22b1617a39d3762d8068f751))

# 0.1.0 (2020-02-23)

### Features

- created new preset react, updated docs accordingly
  ([6cdd363](https://github.com/natterstefan/jest-preset-ns/commit/6cdd363249a5e71c632c93487537e6732c1f63f9))
- improved default config (eg. CI handling), added default enzyme settings
  ([2ecbb9b](https://github.com/natterstefan/jest-preset-ns/commit/2ecbb9bdcfe88a65ddf1aa5a93a877782f237938))
