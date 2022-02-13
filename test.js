const postcss = require('postcss');
const { expect } = require('chai');
const header = require('./index');

it('should contain the given header', () => {
  const options = {
    header: '/* A simple header */',
  };
  const input = '.foo{}';
  const output = `${options.header}\n${input}`;
  const result = postcss(header(options)).process(input);

  expect(result.css).to.be.equal(output);
});
