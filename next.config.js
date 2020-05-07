const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  cssModules: true,
  exportPathMap: function () {
    return {
      '/anime': { page: '/anime' },
    };
  },
});
