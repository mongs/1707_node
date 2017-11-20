/**
 * 管理员 登录 登出
 */
const express = require('express')
const Admin = require('../models/Admin')

const Router = express.Router()

Router.post('/login', (req, res) => {
	console.log(req.body)
	const username = req.body.username
	const password = req.body.password
	if (username && password) {
		Admin.findOne({username, password}, (err, doc) => {
			if (!doc) {
				res.json({
					code: 1,
					msg: '登录失败'
				})
			}else{
				res.json({
					code: 0,
					msg: '登录成功'
				})
			}
		})
	}
})

module.exports = Router