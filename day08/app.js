const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const db = require('./models/db')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
	secret: 'wally',
	resave: false,
	saveUninitialized: false
}))

app.set('view engine', 'ejs')

// 后台管理路由
app.use('/admin', require('./routes/admin'))
app.use('/user', require('./api/user'))
app.use('/api', require('./api/api'))


app.listen(3000, () => {
	console.log('server is running on localhost:3000')
})