const Router = require("koa-router");
const router = new Router({ prefix: "/auth" }); //配置统一前缀
const axios = require("axios");

const { GET_TOKEN, github } = require("../config");

router.get("/", async (ctx) => {
  const code = ctx.query.code;
  if (!code) {
    ctx.body = "code not exist";
  } else {
    let result = "";
    await axios
      .post(
        GET_TOKEN,
        {
          client_id: github.client_id,
          client_secret: github.client_secret,
          code
        },
        { headers: { Accept: "application/json" } }
      )
      .then(async (res) => {
        if (res.status === 200 && res.data && !res.data.error) {
          ctx.session.githubAuth = res.data;
          let { token_type, access_token } = res.data;

          //获取用户信息
          let userInfoResp = await axios({
            method: "GET",
            url: "https://api.github.com/user",
            headers: {
              Authorization: `${token_type} ${access_token}`
            }
          });

          if (userInfoResp.status === 200) {
            ctx.session.userInfo = userInfoResp.data;
            ctx.redirect(
              ctx.session && ctx.session.urlBeforeAuth
                ? ctx.session.urlBeforeAuth
                : "/"
            );
            ctx.session.urlBeforeAuth = "/";
          } else {
            ctx.body = `get userinfo fail ${result.message}`;
          }
        } else {
          result = "get token fail";
        }
      });
    ctx.body = result;
  }
});

module.exports = router;
