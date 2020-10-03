const session = require("koa-session");

//初始化redis
const redis = require("./redis");
const RedisSessionStore = require("./session_store");

const store = new RedisSessionStore(redis);

module.exports = (server) => {
  server.use(
    session(
      {
        key: "jsession_id",
        store,
        maxAge: 86400000
      },
      server
    )
  );
};
