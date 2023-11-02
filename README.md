# @titanom/prettier-config

[Prettier](https://prettier.io) config for projects at [Titanom Technologies](https://titanom.com)

## Installation

```sh
pnpm add -D @titanom/prettier-config
```

## Configuration

CommonJS

```js
// .prettierrc.cjs
const defineConfig = require('@titanom/prettier-config');

module.exports = defineConfig({
  // ... options
});
```

ES Modules

```js
// prettier.config.mjs
import defineConfig from '@titanom/prettier-config';

export default defineConfig({
  // ... options
});
```
