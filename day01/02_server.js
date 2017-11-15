// 1. 导入http模块
const http = require('http')

// 2. 创建服务
/*
request     请求    客户端  ->  服务端
response    响应    服务端  ->  客户端

res.end()
  参数可选
  结束响应, 如果没有res.end 浏览器就是转圈圈的状态
  参数是 服务端 响应给 客户端的内容
*/
const server = http.createServer(function (req, res) {
  res.end('Hello World!')
})

// 3. 监听端口
server.listen(3000)
