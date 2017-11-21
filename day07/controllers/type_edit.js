const Type = require('../models/Type')
/**
 * 分类编辑 页面
 * @param req
 * @param res
 */
exports.showTypeEdit = (req, res) => {
	const type_name = req.query.type_name
	const _id = req.query.id
	res.render('type_edit', {
		type_name,
		_id
	})
}
/**
 * 分类编辑功能
 * @param req
 * @param res
 */
exports.typeEdit = (req, res) => {
	const type_name = req.body.type
	const _id = req.body._id
	Type.update({_id},{type_name,edit_time: Date.now()}).then(doc => {
		if(doc){
			res.json({
				code: 0,
				msg: '分类编辑成功'
			})
		}else{
			res.json({
				code: 1,
				msg: '分类编辑失败'
			})
		}
	})
}