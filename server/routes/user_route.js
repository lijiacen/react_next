const Router = require("koa-router");
const router = new Router({ prefix: "/users" }); //配置统一前缀

router.get("/", async (ctx) => {
  console.log(ctx.session.user);
});
router.post("/", async (ctx) => {
  ctx.session.user = { usarname: "adriano", password: "19820808" };
});
router.del("/", async (ctx) => {
  ctx.session = null;
});

module.exports = router;
