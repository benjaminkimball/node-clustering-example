const Koa = require("koa");
const helmet = require("koa-helmet");
const morgan = require("koa-morgan");
const Router = require("koa-router");

const app = (module.exports = new Koa());
const router = new Router();

app.use(helmet());
app.use(morgan("dev"));

router.get("/", ctx => {
  ctx.body = `koa-server: ${process.pid}`;
});

app.use(router.routes());
app.use(router.allowedMethods());
