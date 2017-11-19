const file = require('../controllers/file')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

function showUpload(req, res) {
	file.getAlbums(albums => {
		res.render('upload', {
			albums: albums
		})
	})
}

exports.showUpload = showUpload

exports.upload = (req, res) => {
	const form = new formidable.IncomingForm();
	form.uploadDir = path.join(__dirname, '../temp')
	form.parse(req, (err, fields, files) => {
		// console.log(fields, files)
		if(err) {
			throw new Error(err)
			return
		}else{
			const album = fields.album
			const oldPath = files.file.path
			const newPath = path.join(__dirname, '../albums', album, files.file.name)
			fs.rename(oldPath, newPath, err => {
				if(err){
					throw new Error(err)
					return
				}else{
					console.log('上传成功')
					res.send('上传成功')
				}
			})
		}
	});
}