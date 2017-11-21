const Article = require('../models/Article')
/**
 * 显示文章列表页
 * @param req
 * @param res
 */
const showArticleList = (req, res) => {
	/**
	 * populate 填充
	 * 关联表的时候  使用
	 * 第一个参数是  当前  集合 中 被填充的字段
	 * 第二个参数是  关联  集合 中  要拿过来的字段
	 */
	Article.find().populate('type_name','type_name').then(docs => {
		console.log(docs)
		res.render('article_list', {
			articles: docs
		})
	})

}

module.exports = showArticleList