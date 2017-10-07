# postcss-header [![Build Status](https://travis-ci.org/fengyuanchen/postcss-header.svg)](https://travis-ci.org/fengyuanchen/postcss-header)

> Add a header to a file.

## Install

```shell
npm install postcss-header --save-dev
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

## License

[MIT](http://opensource.org/licenses/MIT) © [Fengyuan Chen](http://chenfengyuan.com)
