const postcss = require('postcss');

module.exports = postcss.plugin('postcss-header', (options = {}) => {
  options = Object.assign({
    header: '',
  }, options);

  return (css) => {
    const header = options.header || options.banner;

    if (header) {
      css.prepend(header);
    }
  };
});
