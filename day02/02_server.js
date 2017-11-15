const http = require('http')
http.createServer((req, res) => {
  // 设置响应头  格式及字符集
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  // 设置cookie
  res.setHeader('Set-Cookie', ['username=wally', 'password=123'])

  res.writeHead(200, 'ok', {
    'Content-Type': 'text/html;charset=utf-8'
  })
  // 响应内容
  res.write('<h1> 你好世界</h1>')
  // 结束响应
  res.end()
}).listen(3000)
