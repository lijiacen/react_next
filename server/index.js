const Koa = require("koa");
const next = require("next"); //next作为koa中间件引入

//production or development
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

//等编译完成，开启koa server
app.prepare().then(() => {
  const server = new Koa();

  //koa中间件
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res); //ctx.req, ctx.res为nodejs原生request,response对象，保证兼容性
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log("server start success");
  });
});
