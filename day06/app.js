const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const db = require('./models/db')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.set('view engine', 'ejs')

// 后台管理路由
app.use('/admin', require('./routes/admin'))
app.use('/user', require('./api/user'))


app.listen(3000, () => {
	console.log('server is running on localhost:3000')
})