const http = require('http')
http.createServer((req, res) => {
  
  if(req.url === '/favicon.ico') return

  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
  console.log(req.httpVersion)
  console.log(req.statusCode, req.statusMessage)

  res.write('OK')
  res.end()
}).listen(3000)
