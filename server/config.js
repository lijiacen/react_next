const github = {
  url: "https://github.com/login/oauth/",
  client_id: "14a6949340fd123ac947",
  client_secret: "362b69b80b77535b2762c2f036411f42abc820c6",
  scope: "user,public_repo"
};

module.exports = {
  OAUTH_URL: `${github.url}authorize?client_id=${github.client_id}&scope=${github.scope}`,
  GET_TOKEN: `${github.url}access_token`,
  github
};
