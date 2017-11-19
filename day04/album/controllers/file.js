const fs = require('fs')
const path = require('path')
const util = require('util')
const readDir = util.promisify(fs.readdir)
const stat = util.promisify(fs.stat)
const ALBUMS_PATH = path.join(__dirname,'../albums')

exports.getAlbums = async (callback) => {
	let results = []
	const datas = await readDir(ALBUMS_PATH)
	;(async function iterate(i) {
		if(i === datas.length){
			callback && typeof callback === 'function' && callback(results)
			return
		}
		const stats = await stat(path.join(__dirname,'../albums',datas[i]))
		if(stats.isDirectory()){
			results.push(datas[i])
		}
		iterate(i+1)
	})(0)
}

exports.getImages = async (albumName, callback) => {
	let results = []
	const datas = await readDir(path.join(__dirname, '../albums', albumName))
	;(async function iterate(i) {
		if(i === datas.length){
			callback && typeof callback === 'function' && callback(results)
			return
		}
		const stats = await stat(path.join(__dirname,'../albums',albumName, datas[i]))
		if(stats.isFile()){
			results.push(datas[i])
		}
		iterate(i+1)
	})(0)
}

/*
exports.getAlbums = (callback) => {
	fs.readdir('../albums', (err, data) => {
		if(err) {
			throw new Error(err)
			return
		}else{
			let results = []
			;(function iterate(i) {
				if(i === data.length) {
					callback && typeof callback === 'function' && callback(results)
					return
				}
			  fs.stat('../albums/'+data[i], (err, stats) => {
			  	if(err){
					  throw new Error(err)
					  return
				  }else{
			  		if(stats.isDirectory()){
						  results.push(data[i])
					  }
					  iterate(i+1)
				  }
			  })
			})(0)
		}
	})
}
*/