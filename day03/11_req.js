const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/*
:id 就是占位路由 动态路由
/index/123
/index/abc

通过req.params 拿到动态路由的值, 比如/:id
req.params.id

/:pid
req.params.pid
*/
app.get('/index/:id', (req, res) => {
  console.log(req.params)
  res.send("id的值是: " + req.params.id)
})

/**
 * req.query  拿到 格式化成对象格式的  查询字符串
 */
app.get('/register', (req, res) => {
  console.log(req.query)

  res.send("用户名是:" + req.query.username + "; 年龄是: " + req.query.age)
})

app.get('/login', (req, res) => {
  console.log(req.query)

  res.send("用户名是:" + req.query.username + "; 密码是: " + req.query.password)
})

/**
 * post 提交的数据 在请求体中
 * 要想获取post提交的数据 需要用到body-parser中间件
 * 通过req.body拿到数据
 */
app.post('/login', (req, res) => {
  console.log(req.body)

  res.send("用户名是:" + req.body.username + "; 密码是: " + req.body.password)
})

app.listen(3000)