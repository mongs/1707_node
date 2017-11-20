const express = require('express')
const Router = express.Router()

Router.get('/', require('../controllers/index'))
Router.get('/login', require('../controllers/login'))

module.exports = Router
/**
 /admin   欢迎     ->   index
 /admin/login     管理员登录
 /admin/users     用户列表页
 /admin/type_list     文章分类
 /admin/type_add  分类添加
 /admin/type_edit 分类编辑
 /admin/article_list   文章列表页
 /admin/article_add    添加文章
 /admin/article_edit   编辑文章

 /user/login   登录功能
 */