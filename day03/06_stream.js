const fs = require('fs')
// 创建可读流
const ReadStream = fs.createReadStream('./src/a.txt')

ReadStream.on('open', () => {
  console.log('open')
})

ReadStream.on('data', (data) => {
  console.log(data.toString())
})

ReadStream.on('end', () => {
  console.log('end')
})

ReadStream.on('close', () => {
  console.log('close')
})

ReadStream.on('error', err => {
  console.log(err)
})
