const fs = require('fs')

fs.mkdir('./src/dir', err => {
  if(!err){
    console.log('创建目录成功')
  }
})

fs.readdir('./src', (err, files) => {
  if(!err){
    console.log(files)
    ;(function iterate(i){
      if(i===files.length) return
      let _path = './src/' + files[i]
      console.log(_path)
      fs.stat(_path, (err, stats) => {
        if(!err){
          console.log(stats.isFile())
          iterate(i+1)
        }
      })
    })(0)
  }
})