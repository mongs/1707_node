const fs = require('fs')

/*
把a文件读出来
写入b文件中
再读b文件的内容
*/

fs.readFile('./src/a.txt', (err, data) => {
  if(!err){
    fs.writeFile('./src/b.txt', data, err => {
      if(!err){
        console.log('写入成功')
        fs.readFile('./src/b.txt', (err, data) => {
          if(!err){
            console.log(data.toString())
          }else{
            throw new Error(err)
          }
        })
      }else{
        throw new Error(err)
      }
    })
  }else{
    throw new Error(err)
  }
})

