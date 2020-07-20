import * as redis from "redis";

class RedisConfig {
  private client;

  createConnection() {
    this.client = process.env.PRODUCTION
      ? redis.createClient(6379, "redis")
      : redis.createClient();
    return this;
  }

  get(key, func) {
    this.client.get(key, func);
  }

  invalidate(key) {
    this.client.del(key);
  }

  set(key, value) {
    this.client.set(key, value);
  }
}

export default new RedisConfig();
