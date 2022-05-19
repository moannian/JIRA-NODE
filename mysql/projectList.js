var execMySql = require("../db/mySql");
var { extractSelctParms } = require("../tool/mysqlTool")
    /**
     * 对项目列表的增加操作
     * @param {number} projectId //项目ID
     * @param {string} department //部门
     * @param {string} principal //负责人
     * @param {string} createTime //创建事件
     * @param {number} pin //收藏:
     */
let postProjectList = (obj) => {
    let sql = `insert into projectlist (projectID, department, principal, createTime, pin,project) values (${obj.projectID},"${obj.department}","${obj.principal}","${obj.createTime}",${obj.pin},'${obj.project}');`
    return execMySql(sql).then(res => res)
}

/**
 * 对项目列表的删除操作
 * @param {number} id 
 */
let deleteProjectList = (id) => {
    let sql = `delete from projectlist where id=${id};`;
    return execMySql(sql).then(res => res)
}


let putProjectList = (obj, id) => {
    let arr = []
    for (let key in obj) {
        let element = `${key}="${obj[key]}"`
        arr.push(element)
    }
    let str = arr.join(" , ");
    let sql = `update projectlist set ${str} where id=${id};`
    return execMySql(sql).then(res => true, err => false)
}

const selectProjectList = (obj) => {
        let str = extractSelctParms(obj)
        let sql = `select * from projectlist where 1=1 and ${str} ;`
        return execMySql(sql).then(res => res)
    }
    // 根据ID查看某个详情
const GetProjectDetail = (id) => {
    let sql = `select * from projectlist where id=${id} ;`
    return execMySql(sql).then(res => res[0])
}
module.exports = {
    postProjectList,
    deleteProjectList,
    putProjectList,
    selectProjectList,
    GetProjectDetail
}