const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  if(req.url === '/index'){
    const ReadStream = fs.createReadStream('./src/index.html')

    ReadStream.pipe(res)

  }else if(req.url === '/about'){
    fs.readFile('./src/about.html', (err, data) => {
      if(!err){
        res.end(data)
      }
    })
  }else if(req.url === '/base.css'){
    res.setHeader('Content-Type', 'text/css;charset=utf-8')
    fs.readFile('./src/base.css', (err, data) => {
      if(!err){
        res.end(data)
      }
    })
  }else{
    res.end('404')
  }
})

server.listen(3000, () => {
  console.log('running')
})