const http = require('http')
const server = http.createServer((req, res) => {
  // 允许任何地址请求  不存在跨域问题
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.write('hello 21')
  res.end()
})

server.listen(3000, '192.168.0.21', () =>{
  console.log('server is running on 192.168.0.21:3000')
})