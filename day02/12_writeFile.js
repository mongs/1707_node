const fs = require('fs')

fs.writeFile('./src/test.txt', '你好,世界1', {
  flag: 'a'
}, err => {
  if(!err){
    console.log('写入成功')
  }else{
    throw new Error(err)
  }
})

fs.writeFileSync('./src/test.txt', '你好,世界2', {
  flag: 'a'
})