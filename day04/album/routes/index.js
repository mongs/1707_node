const file = require('../controllers/file')

function showIndex(req, res) {

  file.getAlbums()

  res.render('index', {
    albums: ['1','2','3','4']
  })
}

module.exports = showIndex
