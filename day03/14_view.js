const express = require('express')
const app = express()

app.use(express.static('public'));

// 设置模板引擎 ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // 渲染模板 index -> views/index.ejs
  // 第二个参数是 传给模板的数据
  res.render('index', {
    title: 'NodeJS',
    students: ['张三','李四','王老五']
  })
})

app.listen(3000)