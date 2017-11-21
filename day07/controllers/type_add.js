const Type = require('../models/Type')
/**
 * 添加分类的页面
 * @param req
 * @param res
 */
exports.showTypeAdd = (req, res) => {
	res.render('type_add')
}
/**
 * 添加分类功能
 * @param req
 * @param res
 */
exports.typeAdd = (req, res) => {
	const type = req.body.type
	if(type){
		Type.findOne({type_name: type}, (err, doc) => {
			if(doc){
				res.json({
					code: 1,
					msg: '分类已存在'
				})
			}else{
				Type.create({type_name: type}, (err, doc) => {
					if(doc){
						res.json({
							code: 0,
							msg: '分类添加成功'
						})
					}else{
						res.json({
							code: 2,
							msg: '分类添加失败'
						})
					}
				})
			}
		})
	}
}