const withCss = require("@zeit/next-css");
const { OAUTH_URL } = require("./server/config");

if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}

module.exports = withCss({
  publicRuntimeConfig: {
    github_oauth: OAUTH_URL
  }
});
