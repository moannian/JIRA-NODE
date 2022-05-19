# 内容介绍
# 使用框架 express (使用方法 express [name])
# 已使用的插件 cross-env(设置环境变量) nodemon(快捷的启动项目) 

# 关于中间件
# 准确的来说，每一个app.use((req,res,next)=>viod)中的的函数都是中间件，然后这些中间件可以使用next进行串联
# req:request 请求
# res:response:响应
# next()表示当某一请求成功之后，表示继续寻找并执行相同父路由且方法相同的路由，且按从上到下的顺序执行
# 它也可以多个中间件一起使用 app.use(((req,res,next)=>{next()},((req,res,next)=>viod)

# 中间件原理
# 连接（后续加上）

# 关于cookie 
# 什么是cookie？
# 是存储在浏览器的一段字符串（最大5kib）
# 不支持跨域（基于同源策略）
# 每次发送http的请求，都会将请求域的cookie发送给server （基于安全考虑），同时sever端也可以修改cookie并返回给浏览器，浏览器也可以通过js修改cookie
# server端如何修改：responsen.setHeader("set-Cookie","值;path=/;")，但我们上面也说了，前端也可以对此修改，但这样不利于网页的安全，为了限制cookie不可再浏览器修改，可以添加httpOnly：responsen.setHeader("set-Cookie","值;path=/;httOnly"),这样我们的数据就只能再server端修改了

# 关于session
# 用userId去对应cookie的信息，并返回道浏览器中,算是一层加密

#express-session :设置sesion的插件

# redis
# 存在意义？
# session是放于node.js的内存中，但因内存有限，访问量过大时，会导致内存暴增，内存会崩溃，而且应用上线以后，运行是多线程的，进程之间无法共享。单redis可扩展；它与mysql差不多。内存只是引用一下而已
# 插件:redis connect-redis 

# morgan 写日志



# 关于JWT

