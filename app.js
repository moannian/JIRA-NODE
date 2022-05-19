var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const redisClient = require("./db/redis")
const redisConnect = require("connect-redis")(session);
const path = require("path");
const fs = require("fs")

// 设置路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let loginRouter = require("./routes/login");
let projectList = require("./routes/projectList");
let principalList = require("./routes/principalList")

var app = express();

let logfileName = path.join(__dirname, "logs", "index.log");
let writeStream = fs.createWriteStream(logfileName, {
    flags: "a"
})
app.use(logger('dev', {
    stream: writeStream
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 配置redis
const SessionStore = new redisConnect({
    client: redisClient
})
app.use(session({
    secret: "LIHUU_1212",
    cookie: {
        path: "/",
        httpOnly: true,
        maxAge: 800000
    },
    store: SessionStore //储存redis
}))

// 注册路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/projectlist', projectList);
app.use('/principallist', principalList);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;