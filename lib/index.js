module.exports = (options = {}) => {
  options = Object.assign({
    header: '',
  }, options);

  return {
    postcssPlugin: 'postcss-header',
    OnceExit(root) {
      const header = options.header || options.banner;

      if (header) {
        root.prepend(header);
      }
    },
  };
};
module.exports.postcss = true;
