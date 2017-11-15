const http = require('http')

const server = http.createServer((req, res) => {
  res.end('<h1>Hello Node.JS</h1>')
})

server.listen(3000)

// 3000端口被占用了  listen EADDRINUSE :::3000
