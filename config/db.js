// 用于消费一些配置l

const env = process.env.NODE_ENV
let REDIS_CONFIG
let MYSQL_CONFIG

if (env === "development") {
    MYSQL_CONFIG = {
        host: "localhost",
        user: "root",
        password: "123456",
        port: 3306,
        database: "mysqlframe"
    }
    REDIS_CONFIG = {
        port: "6379",
        host: "127.0.0.1"
    }
} else {}

module.exports = {
    REDIS_CONFIG,
    MYSQL_CONFIG
}