const http = require('http')
const querystring = require('querystring')

const server = http.createServer()

server.on('request', (req, res) => {
  if(req.url === '/favicon.ico') return
  
  let str = ''
  // 当有数据提交的时候触发  data  事件
  // 如果你提交的内容很多, node会自动将内容分成小的片段chunk
  // 然后自己再按顺序拼接好
  req.on('data', chunk => {
    str += chunk
  })
  // 等数据接收完以后  再处理
  req.on('end', () => {
    console.log(str)
    const userInfo = querystring.parse(str)
    const username = userInfo.username
    const password = userInfo.password
    console.log(username, password)
  })

  res.end('hello')
})

server.listen(3000, () => {
  console.log('server is running on localhost:3000')
})