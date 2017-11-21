const express = require('express')
const Router = express.Router()

Router.use((req, res, next) => {
	if(req.url === "/login") return next()
	const blog_admin_cookie = req.cookies.blog_admin_cookie
	// 如果没有cookie 跳到登录页面
	if(!blog_admin_cookie){
		res.redirect('/admin/login')  // 重定向
	}
	next()
})

Router.get('/', require('../controllers/index'))
Router.get('/login', require('../controllers/login'))
Router.get('/type_list', require('../controllers/type_list'))
Router.get('/type_add', require('../controllers/type_add').showTypeAdd)
Router.post('/type_add', require('../controllers/type_add').typeAdd)
Router.get('/type_delete', require('../controllers/type_delete'))
Router.get('/type_edit', require('../controllers/type_edit').showTypeEdit)
Router.post('/type_edit', require('../controllers/type_edit').typeEdit)
Router.get('/article_add', require('../controllers/article_add').showArticleAdd)
Router.post('/article_add', require('../controllers/article_add').articleAdd)
Router.get('/article_list', require('../controllers/article_list'))

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