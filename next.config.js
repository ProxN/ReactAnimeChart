const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  cssModules: true,
  exportPathMap: function () {
    return {
      '/': { page: '/anime' },
      '/anime': { page: '/anime' },
    };
  },
});
