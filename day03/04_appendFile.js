const fs = require('fs')
fs.appendFile('./src/b.txt', 'Hello', err => {
  if(!err) console.log('追加成功')
})