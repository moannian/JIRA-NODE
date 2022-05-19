var execMySql = require("../db/mySql");
var { extractSelctParms } = require("../tool/mysqlTool")
    /**
     * 对项目列表的增加操作
     */
let postPrincipalList = (obj) => {
    let sql = `insert into principallist (name,principalID) values ("${obj.name}","${obj.principalID}");`
    return execMySql(sql).then(res => res)
}

/**
 * 对项目列表的删除操作
 * @param {number} id 
 */
let deletePrincipalList = (id) => {
    let sql = `delete from principal where id=${id};`;
    return execMySql(sql).then(res => res)
}

// 更改操作
let putPrincipalList = (obj, id) => {
    let arr = []
    for (let key in obj) {
        let element = `${key}="${obj[key]}"`
        arr.push(element)
    }
    let str = arr.join(" , ");
    let sql = `update principallist set ${str} where id=${id};`
    return execMySql(sql).then(res => true, err => false)
}

const selectPrincipalList = (obj) => {
    let sql = `select * from principallist;`
    return execMySql(sql).then(res => res)
}

module.exports = {
    postPrincipalList,
    deletePrincipalList,
    putPrincipalList,
    selectPrincipalList
}