var express = require('express');
var router = express.Router();

const {
    postProjectList,
    deleteProjectList,
    putProjectList,
    selectProjectList,
    GetProjectDetail
} = require("../mysql/projectList")
const {
    SuccessModel,
    ErrorModel
} = require("../tool/index")
    /* GET home page. */

// 增加接口
router.post('/', function(req, res, next) {
    let { projectID, department, principal, createTime, pin, project } = req.body
    let result = postProjectList({ projectID, department, principal, createTime, pin, project });
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
router.delete("/:id", function(req, res, next) {
    let id = req.params.id;
    console.log(id)
    let result = deleteProjectList(Number(id));
    result.then(data => {
        res.json(
            new SuccessModel("删除成功")
        ), err => {
            res.json(
                new ErrorModel("删除失败")
            )
        }
    })
})




//查询操作
router.get("/", (req, res, next) => {
    let {...obj } = req.body;
    let result = selectProjectList({...obj });
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
router.get("/:id", (req, res, next) => {
        let result = GetProjectDetail(req.params.id);
        result.then(data => {
            console.log(data);
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
    // 修改操作
router.put("/:id", function(req, res, next) {
    let id = req.params.id
    let {...obj } = req.body;
    let result = putProjectList({...obj }, id);
    result.then(data => {
        if (data) {
            res.json(new SuccessModel("更新成功"))
        } else {
            res.json(new SuccessModel("更新失败"))
        }
    })
})
module.exports = router;