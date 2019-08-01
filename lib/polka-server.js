const polka = require("polka");
const helmet = require("helmet");
const morgan = require("morgan");

const server = (module.exports = polka());

server.use(helmet());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.type("text/plain").send(`polka-server: ${process.pid}`);
});
