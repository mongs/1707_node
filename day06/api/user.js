/**
 * 管理员 登录 登出
 */
const express = require('express')
const Router = express.Router()

Router.post('/login', (req, res) => {
 console.log(req.body)
})

module.exports = Router