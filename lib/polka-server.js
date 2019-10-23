const polka = require("polka");
const helmet = require("helmet");
const morgan = require("morgan");

const app = (module.exports = polka());

app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end(`polka-server: ${process.pid}`);
});
