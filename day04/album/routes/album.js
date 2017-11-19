const file = require('../controllers/file')
function showImages(req, res) {
  const albumName = req.params.name
	file.getImages(albumName, images => {
		res.render('album', {
			images: images,
			albumName: albumName
		})
  })

}

module.exports = showImages