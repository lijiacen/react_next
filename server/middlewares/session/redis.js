const Redis = require("ioredis");

const redis = new Redis({
  host: "47.105.195.113",
  password: "880915",
  port: 6379
});

module.exports = redis;
