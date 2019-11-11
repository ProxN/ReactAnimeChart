const withCSS = require("@zeit/next-css");
const { Season } = require("./utils/getSeason");

module.exports = withCSS({
  cssModules: true,
  exportPathMap: function() {
    return {
      "/": { page: "/anime", query: { name: Season() } },
      "/WINTER": { page: "/anime", query: { name: "WINTER" } },
      "/SPRING": { page: "/anime", query: { name: "SPRING" } },
      "/SUMMER": { page: "/anime", query: { name: "SUMMER" } },
      "/FALL": { page: "/anime", query: { name: "FALL" } }
    };
  }
});
