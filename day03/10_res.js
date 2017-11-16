const express = require('express')
const app = express()
const path = require('path')

// get 方式 请求 根路由/ 
app.get('/', (req, res) => {
  // 设置headers
  res.set('Content-Type', 'text/plain')
  // end
  res.send('<h1>hello</h1>')
})

app.get('/index', (req, res) => {
  // 将参数中的多个路径 合并成一个绝对路径
  const _path = path.resolve(__dirname, './src/about.html')
  // 发送文件  参数必须是个绝对路径  相对路径会报错
  res.sendFile(_path)
})

app.get('/login', (req, res) => {
  // 返回json格式的数据
  res.status(200).json({
    status: 0,
    msg: '登录成功'
  })
})

app.get('/jsonp', (req, res) => {
  // 返回jsonp数据   /jsonp?callback=fn
  // 默认的callback name  就是callback
  // 修改callback name
  app.set('jsonp callback name', 'cb');
  res.status(200).jsonp({
    username: 'wally',
    age: 17
  })
})


app.listen(3000, () => {
  console.log('running')
})