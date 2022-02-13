module.exports = (options = {}) => {
  options = Object.assign({
    header: '',
  }, options);

  return {
    postcssPlugin: 'postcss-header',
    Once(root) {
      const header = options.header || options.banner;

      if (header) {
        root.prepend(header);
      }
    },
  };
};
module.exports.postcss = true;
