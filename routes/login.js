var express = require('express');
var router = express.Router();
var { loginSql } = require("../mysql/index");
var { SuccessModel, ErrorModel } = require("../tool/index")
    /* GET users listing. */
router.post('/', function(req, res, next) {
    let { username, password } = req.body
    let result = loginSql(username, password)
    req.session.username = username;
    req.session.password = password;
    result.then(res => {
        console.log(res);
    })
    res.json({
        message: "请求成功"
    })
});

module.exports = router;