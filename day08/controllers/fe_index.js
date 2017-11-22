const Type = require('../models/Type')
const getData = (req, res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
	res.set('Access-Control-Allow-Credentials', 'true')
	Type.find().then(docs => {
		res.json({
			code: 0,
			data: docs
		})
	})
}

module.exports = getData