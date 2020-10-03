const Router = require("koa-router");
const router = new Router({ prefix: "/users" }); //配置统一前缀

router.get("/", async (ctx) => {
  if (ctx.session.userInfo) {
    ctx.body = ctx.session.userInfo;
  }
});

router.del("/", async (ctx) => {
  ctx.session = null;
});

module.exports = router;
