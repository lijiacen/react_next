async function test() {
  const Redis = require("ioredis");

  const redis = new Redis({
    host: "47.105.195.113",
    password: "880915",
    port: 6379
  });
  let res = await redis.keys("*");
  // let k = await redis.get("ssid:5a28eaea-26a5-4a55-852e-c9916a5d5097");
  for (let i in res) {
    console.log(await redis.get(res[i]));
  }
}

test();
