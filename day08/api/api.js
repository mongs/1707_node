const express = require('express')
const Type = require('../models/Type')
const Router = express.Router()

Router.post('/register', require('../controllers/fe_register.js'))
Router.post('/login', require('../controllers/fe_login.js'))



let datas = {code: 0, types: [], username: ''}

Router.use((req, res, next) => {
	// console.log(req.session.username)
	if(req.session && req.session.username){ // 登录过
		datas.username = req.session.username
	}else{
		datas.username = ''
	}
	next()
})

Router.get('/index', (req, res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
	res.set('Access-Control-Allow-Credentials', 'true')
	Type.find().then(docs => {
		docs.forEach(function (element, index) {
			datas.types.push(element.type_name)
		})
		res.json(datas)
	})
})

Router.get('/logout', (req, res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
	res.set('Access-Control-Allow-Credentials', 'true')
	console.log(req.session)
	req.session.destroy(err => {
		if(err){
			res.json({code: 1, msg: '退出登录失败'})
		}else{
			console.log(req.session)
			// datas.username = ''
			res.json({code: 0, msg: '退出登录成功'})
		}
	})
})

module.exports = Router