const redis = require("redis");
const { REDIS_CONFIG } = require("../config/db")

//创建redis的客户端
const redisClient = redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host)
redisClient.on("error", error => {
    console.error(error)
})
module.exports = redisClient