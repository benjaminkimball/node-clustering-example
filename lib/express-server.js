const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const app = (module.exports = express());

app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.type("text/plain").send(`express-server: ${process.pid}`);
});
