
# babel-preset-urban

> Babel preset for es2015 transforms, with a bit of react, class props and async shizzle thrown in

## Install

```sh
npm i -D babel-preset-urban
```

## Usage

`.babelrc` recommended

```json
{
  "presets": [ "urban" ]
}
```

## Polyfill

The async transformation uses
[regenerator](https://www.npmjs.com/package/regenerator) so any code
transformed using this preset requires the runtime. The easiest way to
include this is to use the
[babel-polyfill](https://www.npmjs.com/package/babel-polyfill).

The polyfill is **only** required if you actually write any `async`
code.

```sh
npm i babel-polyfill
```

```js
import 'babel-polyfill'
```

