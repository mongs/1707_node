const fs = require('fs')

exports.getAlbums = () => {
	fs.readdir('../albums', (err, data) => {
		if(err) {
			throw new Error(err)
			return
		}else{
			console.log(data)
			let results = []
			;(function iterate(i) {
				if(i === data.length) {
					console.log(results)
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