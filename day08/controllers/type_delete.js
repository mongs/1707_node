/**
 * 删除分类
 * type_delete
 * */
const Type = require('../models/Type')
const typeDelete = (req, res) => {
	const _id = req.query.id
	Type.findByIdAndRemove(_id).then(doc => {
		if(doc) {
			res.redirect('/admin/type_list')
		}
	})
}

module.exports = typeDelete