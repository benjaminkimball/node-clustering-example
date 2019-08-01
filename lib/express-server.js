const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = (module.exports = express());

server.use(helmet());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.type("text/plain").send(`express-server: ${process.pid}`);
});
