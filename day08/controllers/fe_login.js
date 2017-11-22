/**
 * 前台用户注册
 * @param req
 * @param res
 */
const crypto = require('crypto');
const User = require('../models/User')

const secret = 'wally';

const login = (req, res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
	res.set('Access-Control-Allow-Credentials', 'true')
	const username = req.body.username
	// 加密
	const password = crypto.createHmac('sha256', secret)
		.update(req.body.password)
		.digest('hex');
	User.findOne({username, password}).then(doc => {
		if(doc){
			// 设置/获取 session  都用的是 req.session
			req.session.username = username
			// 过期时间  单位是ms
			req.session.cookie.maxAge = 6000000
			res.json({code: 0, msg: '登录成功'})
		}else{
			res.json({code: 1, msg: '用户名或密码错误'})
		}
	})
}

module.exports = login