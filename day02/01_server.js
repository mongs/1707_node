const http = require('http')
http.createServer((req, res) => {
  // 设置响应头  格式及字符集
  res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
  // 响应内容
  res.write('<h1>writing, 你好世界</h1>')
  // 结束响应
  res.end()
}).listen(3000)
