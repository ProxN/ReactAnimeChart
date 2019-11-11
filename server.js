const express = require("express");
const next = require("next");
const { Season } = require("./utils/getSeason");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req, res, next) => {
    if (req.path === "/") {
      const season = Season();
      res.redirect(`/${season}`);
    }
    next();
  });
  server.get("/", (req, res) => {
    res.redirect(`/${season}`);
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(3004, err => {
    if (err) throw err;
    console.log("server started on port 3004");
  });
});
