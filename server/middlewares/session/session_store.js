function getRedisSessionId(sid) {
  return `ssid:${sid}`;
}

class RedisSessionStore {
  constructor(redis) {
    this.redis = redis;
  }
  async get(sid) {
    const id = getRedisSessionId(sid);
    const data = await this.redis.get(id);
    if (!data) {
      return null;
    }
    try {
      const result = JSON.parse(data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  async set(sid, sess, maxAge) {
    const id = getRedisSessionId(sid);
    typeof maxAge === "number" && (maxAge = Math.ceil(maxAge / 1000));
    try {
      const sessStr = JSON.stringify(sess);
      if (maxAge) {
        await this.redis.setex(id, maxAge, sessStr);
      } else {
        await this.redis.set(id, sessStr);
      }
    } catch (error) {
      console.error(error);
    }
  }
  async destroy(sid) {
    const id = getRedisSessionId(sid);
    await this.redis.del(id);
  }
}
module.exports = RedisSessionStore;
