# postcss-header

[![Build Status](https://img.shields.io/travis/fengyuanchen/postcss-header.svg)](https://travis-ci.org/fengyuanchen/postcss-header)  [![Downloads](https://img.shields.io/npm/dm/postcss-header.svg)](https://www.npmjs.com/package/postcss-header) [![Version](https://img.shields.io/npm/v/postcss-header.svg)](https://www.npmjs.com/package/postcss-header)

> Add a header to a file.

## Install

```shell
npm install postcss-header postcss --save-dev
```

## Usage

```js
const postcss = require('postcss');
const header = require('postcss-header');
const result = postcss(header({
  header: '/* A simple header */',
})).process('.foo{}');

console.log(result);
// > /* A simple header */
// > .foo{}
```

## Options

### header

- Type: `String`
- Default: `''`
- Alias: banner

The string which will be put at the beginning of the css file.

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
