# @titanom/prettier-config

[Prettier](https://prettier.io/) Configuration of [Titanom Technologies GmbH](https://titanom.com/)

## Installation

```sh
# npm
npm i -D @titanom/prettier-config

# yarn
yarn add -D @titanom/prettier-config

# pnpm
pnpm add -D @titanom/prettier-config
```

## Usage

```js
// .prettierrc.cjs
module.exports = require('@titanom/prettier-config');
```

Or if you want to change the config:

```js
// .prettierrc.cjs
module.exports = {
  ...requre('@titanom/prettier-config'),
  // your config here
}
```
