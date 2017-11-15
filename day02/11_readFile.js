const fs = require('fs')

fs.readFile('./src/test.txt', (err, data) => {
  if(!err){
    console.log(data.toString(), 1)
  }else{
    throw new Error(err)
  }
})

const data = fs.readFileSync('./src/test.txt')

console.log(data, 2)


console.log(123)