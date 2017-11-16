const fs = require('fs')

fs.mkdir('./dir', err => {
  if(!err){
    fs.rename('./src/c.txt', './dir/hello.txt', err => {
      if(!err) {
        console.log('移动成功')
      }else{
        console.log(err)
      }
    })
  }
})