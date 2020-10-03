const fs = require("fs");

//注册同级别目录下所有路由
module.exports = (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") {
      return;
    }
    const route = require(`./${file}`);
    app.use(route.routes());
    app.use(route.allowedMethods()); //加上后所有方法支持options请求
  });
};
