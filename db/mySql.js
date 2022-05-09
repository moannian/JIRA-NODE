let mysql = require("mysql");
let { MYSQL_CONFIG } = require("../config/db");

const con = mysql.createConnection({
    database: MYSQL_CONFIG.database,
    port: MYSQL_CONFIG.port,
    host: MYSQL_CONFIG.host,
    password: MYSQL_CONFIG.password,
    user: MYSQL_CONFIG.user
})
con.connect()

const execMySql = (sql) => {
    return new Promise((reslove, reject) => {
        con.query(sql, (err, res) => {
            if (err) {
                reject(err)
            }
            reslove(res)
        })
    })

}

module.exports = execMySql