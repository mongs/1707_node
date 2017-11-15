const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return

  const query = url.parse(req.url, true).query
  const username = query.username
  const password = query.password

  res.setHeader('Content-Type','text/html;charset=utf-8')
  if(username && username === 'admin'){
    res.write('<h1>您好, 系统管理员</h1>')
  }else{
    res.write('普通会员')
  }

  res.end()
})

server.listen(3000, '192.168.0.21', () =>{
  console.log('server is running on 192.168.0.21:3000')
})