/**
 * 管理员 登录 登出
 */
const express = require('express')
const Admin = require('../models/Admin')

const Router = express.Router()

Router.post('/login', (req, res) => {
	// console.log(req.body)
	const username = req.body.username
	const password = req.body.password
	if (username && password) {
		Admin.findOne({username, password}, (err, doc) => {
			if (!doc) {
				res.json({
					code: 1,
					msg: '登录失败, 请重试'
				})
			}else{
				const user_info = {
					username: username
				}
				res.cookie('blog_admin_cookie',JSON.stringify(user_info), {maxAge: 10*60*1000})
				res.json({
					code: 0,
					msg: '登录成功'
				})
			}
		})
	}
})

Router.get('/logout', (req, res) => {
	// 清除 登录状态
	res.clearCookie('blog_admin_cookie')
	res.redirect('/admin/login')
})

module.exports = Router