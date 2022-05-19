var execMySql = require("../db/mySql");

let loginSql = (username, password) => {
    let sql = `select * from login where username="${username}" and password="${password}";`
    return execMySql(sql).then(res => res[0])
}

module.exports = { loginSql }