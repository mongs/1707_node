var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 写路由的时候  应该把更具体的路由写上边
 * app.use() 也可以配置路由
 * 假如 后台的管理路由  /admin  /admin/login  /admin/register
 */

const admin = require('./routes/admin')
app.use('/admin', admin)

app.get('/index', (req, res, next) => {
  console.log('index')
  next()
})

app.get('/:id', (req, res) => {
	console.log('id')
})






app.listen(3000)
