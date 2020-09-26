import postcss from 'postcss';

export default postcss.plugin('postcss-header', (options = {}) => {
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
