const fs = require('fs')

fs.open('./src/test.txt', 'r', (err, fd) => {
  if(!err){
    let bf = new Buffer('我在思软科技')
    fs.read(fd, bf, 0, 6, 7, (err, bytesRead, buffer) => {
      if(!err){
        console.log(bytesRead, buffer.toString())
      }
    })
  }
})