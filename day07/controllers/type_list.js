const Type = require('../models/Type')
const showTypeList = (req, res) => {
	Type.find().then(result => {
		if(result){
			res.render('type_list', {
				types: result
			})
		}
	})
}

module.exports = showTypeList
