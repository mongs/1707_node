/**
 * 文章 model
 * @type {*}
 */
const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
	title: String,
	img: String,
	type_name: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Type'   /* 关联 Type types*/
	},
	content: String,
	create_time: {
		type: Date,
		default: Date.now
	},
	update_time: {
		type: Date,
		default: Date.now
	}
})

const ArticleModel = mongoose.model('Article', ArticleSchema)

module.exports = ArticleModel