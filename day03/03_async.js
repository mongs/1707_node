const fs = require('fs')
const util = require('util')

// 将满足格式要求的  fs.readFile  promise化
const readFile = util.promisify(fs.readFile)

function writeFile(url, data){
  return new Promise((resolve, reject) => {
    fs.writeFile(url, data, err => {
      if(!err) {
        resolve('ok')
      }else{
        reject(err)
      }
    })
  })
}

async function read () {
  // await 会等异步操作返回结果 返回值就是拿到的数据 只有上一个await返回结果后 才会执行下边的代码
  const data = await readFile('./src/a.txt')
  console.log(data.toString())
  await writeFile('./src/b.txt', data)
  const res = await readFile('./src/b.txt')
  console.log(res.toString())
}

read()


/*
async function() {
  await fn1()
  await fn2()
  ...
}

await 只能在async函数中使用
await 后边跟着的是个promise对象, 如果不是promise 会转换成promise对象

async 返回的是个promise对象  也就是可以用then拿他的返回值

在Node 8.* 版本引入了 async, 并且util.promisily

util.promisily  是将node中 特定格式 的函数 promise化
特定格式: 必须是node中错误优先回调函数的格式
  也就是必须有回调函数, 并且回调函数的参数必须是(err, value)这种格式

*/