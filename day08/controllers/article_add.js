const formidable = require('formidable')
const path = require('path')
const fs = require('fs')
const Type = require('../models/Type')
const Article = require('../models/Article')
/**
 * 文章添加页面
 * @param req
 * @param res
 */
exports.showArticleAdd = (req, res) => {
	Type.find().then(docs => {
		if (docs) {
			res.render('article_add',{
				types: docs
			})
		}
	})
}
/**
 * 文章添加的功能
 */
exports.articleAdd = (req, res) => {
	const form = new formidable.IncomingForm();
	form.uploadDir = path.join(__dirname, '../uploads')
	form.parse(req, (err, fields, files) => {
		// console.log(fields, files)
		const oldPath = files.img.path
		const name = 'article_' + Date.now() + files.img.name
		const newPath = path.join(__dirname, '../uploads', name)
		fs.rename(oldPath, newPath, err => {
			if(err){
				res.send('上传失败')
			}else{
				const data = {
					title: fields.title,
					content: fields.content,
					type_name: fields.type,
					img: '/uploads/' + name
				}
				Article.create(data).then(doc => {
					if(doc){
						res.render('upload_success', {
							msg: '上传成功'
						})
					}else{
						res.render('upload_success', {
							msg: '上传失败'
						})
					}
				})
			}
		})
	})
}