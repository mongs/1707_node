const fs = require('fs')

const ReadSteam = fs.createReadStream('./src/a.txt')
const WriteStream = fs.createWriteStream('./dir/hello.txt')

ReadSteam.pipe(WriteStream)
