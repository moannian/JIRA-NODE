var express = require('express');
var router = express.Router();

const {
    postPrincipalList,
    deletePrincipalList,
    putPrincipalList,
    selectPrincipalList
} = require("../mysql/principal")
const {
    SuccessModel,
    ErrorModel
} = require("../tool/index")
    /* GET home page. */

// 增加接口
router.post('/', function(req, res, next) {
    let { name, principalID } = req.body
    let result = postPrincipalList({ name, principalID });
    result.then(data => {
        res.json(
            new SuccessModel(data)
        ), err => {
            res.json(
                new ErrorModel("添加失败")
            )
        }
    })
});
// 删除接口
router.delete("/", function(req, res, next) {
    let { id } = req.body;
    let result = deletePrincipalList(id);
    result.then(data => {
        res.json(
            new SuccessModel(data)
        ), err => {
            res.json(
                new ErrorModel("添加失败")
            )
        }
    })
})


//暂时不做操作
// 修改操作
router.put("/", function(req, res, next) {
    let { id, ...obj } = req.body;
    let result = putPrincipalList({...obj }, id);
    result.then(data => {

        if (data) {
            res.json(new SuccessModel("更新成功"))
        } else {
            res.json(new SuccessModel("更新失败"))
        }
    })
})

//查询操作
router.get("/", (req, res, next) => {
    let {...obj } = req.body;
    let result = selectPrincipalList({...obj });
    result.then(data => {
        res.json(
            new SuccessModel(data, "请求成功")
        )
    }).catch(
        err => {
            console.log(err);
            res.json(
                new ErrorModel("请求失败")
            )
        }
    )

})
module.exports = router;