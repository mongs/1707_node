const markdown = require( "markdown" ).markdown;
const Article = require('../models/Article')
const showArticleInfo = (req, res) => {
	const _id = req.query._id
	Article.findById(_id).populate('type_name','type_name').then(doc => {
		// console.log(doc)
		doc.content = markdown.toHTML(doc.content)
		if(doc) {
			res.render('article_info', {
				article: doc
			})
		}
	})
}

module.exports = showArticleInfo