<<<<<<< HEAD
const express = require('express');
const next = require('next');
const { getSeason } = require('./helpers/animeHelper');

const dev = process.env.NODE_ENV !== 'production';
=======
const express = require("express");
const next = require("next");
const { Season } = require("./utils/getSeason");
const dev = process.env.NODE_ENV !== "production";
>>>>>>> 42d29e1b5e9b17413852626f9ad6bf95a570943e
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
<<<<<<< HEAD
  server.get('/a/:name', (req, res) => {
    app.render(req, res, '/anime', { name: req.params.name });
  });
  server.get('/', (req, res) => {
    const name = getSeason();
    app.render(req, res, '/anime', { name });
  });
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(3004, (err) => {
    if (err) throw err;
    console.log('server started on port 3004');
=======

  server.use((req, res, next) => {
    if (req.path === "/") {
      const season = Season();
      res.redirect(`/${season}`);
    }
    next();
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(3004, err => {
    if (err) throw err;
    console.log("server started on port 3004");
>>>>>>> 42d29e1b5e9b17413852626f9ad6bf95a570943e
  });
});
