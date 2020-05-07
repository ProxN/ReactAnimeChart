<<<<<<< HEAD
const withCSS = require('@zeit/next-css');
=======
const withCSS = require("@zeit/next-css");
const { Season } = require("./utils/getSeason");

>>>>>>> 42d29e1b5e9b17413852626f9ad6bf95a570943e
module.exports = withCSS({
  cssModules: true,
  exportPathMap: function() {
    return {
<<<<<<< HEAD
      '/anime': { page: '/anime' },
    };
  },
=======
      "/": { page: "/anime", query: { name: Season() } },
      "/WINTER": { page: "/anime", query: { name: "WINTER" } },
      "/SPRING": { page: "/anime", query: { name: "SPRING" } },
      "/SUMMER": { page: "/anime", query: { name: "SUMMER" } },
      "/FALL": { page: "/anime", query: { name: "FALL" } }
    };
  }
>>>>>>> 42d29e1b5e9b17413852626f9ad6bf95a570943e
});
