const fs = require('fs')
// 创建可读流
const WriteStream = fs.createWriteStream('./dir/hello.txt')

WriteStream.write('hello hi', () => {
  console.log('写入成功')
})
