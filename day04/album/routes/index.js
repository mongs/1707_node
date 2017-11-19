const file = require('../controllers/file')

function showIndex(req, res) {
  file.getAlbums(results => {
	  res.render('index', {
		  albums: results
	  })
  })
}

module.exports = showIndex
