const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  cssModules: true,
  exportPathMap: function () {
    return {
      '/': { page: '/anime' },
      '/WINTER': { page: '/anime' },
      '/SPRING': { page: '/anime' },
      '/FALL': { page: '/anime' },
      '/SUMMER': { page: '/anime' },
      '/anime': { page: '/anime' },
    };
  },
});
