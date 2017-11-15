const http = require('http')
http.createServer((req, res) => {
  
  let _url = req.url

  if(_url === '/favicon.ico') return
  /*
    /  主页
    /student   学生信息
    /teacher   教师信息
    404
  */
  res.setHeader('Content-Type','text/html;charset=utf-8')

  if(_url === '/'){
    res.write('<h1>主页</h1>')
  }else if(_url === '/student'){
    res.write('<h1>学生信息</h1>')
  }else if(_url === '/teacher'){
    res.write('<h1>教师信息</h1>')
  }else{
    res.write('<h1>404</h1>')
  }
  
  res.end()
}).listen(3000)
