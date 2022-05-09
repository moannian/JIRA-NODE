var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const session = req.session;
    if (!session.num) {
        session.num = 0
    }

    session.num++
        res.json({
            state: 0,
            data: session.num
        })
});

module.exports = router;