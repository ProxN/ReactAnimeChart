const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true,
  exportPathMap: function() {
    return {
      "/": { page: "/anime", query: { name: "FALL" } },
      "/winter": { page: "/anime", query: { name: "WINTER" } },
      "/spring": { page: "/anime", query: { name: "SPRING" } },
      "/summer": { page: "/anime", query: { name: "SUMMER" } },
      "/fall": { page: "/anime", query: { name: "FALL" } }
    };
  }
});
