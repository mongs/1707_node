const fs = require('fs')

/*
把a文件读出来
写入b文件中
再读b文件的内容
fn(callback(){
  fn(callback(){
    fn(callback(){
      .....
    })
  })
})


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
*/

function readFile(url){
  return new Promise((resolve, reject) => {
    fs.readFile(url, (err, data) => {
      if(err){
        reject(err)   // 失败
      }else{
        resolve(data) // 成功
      }
    })
  })
}

readFile('./01_fs.js')
  .then(data => {   // 成功的回调函数  data -> resolve(data)
    // console.log(data.toString())
    return new Promise((resolve, reject) => {
      fs.writeFile('./src/b.txt', data, err => {
        if(err){
          reject(err)
        }else{
          resolve('写入成功')
        }
      })
    })
  }, err => {       // 失败的回调函数  err -> reject(err)
    console.log(err)
  })
  .then(res => {
    console.log(res)
    return new Promise((resolve, reject) => {
      fs.readFile('./src/b.txt1', (err, data) => {
        if(err){
          reject(err)
        }else{
          resolve(data)
        }
      })
    })
  }, err => {
    console.log(err)
  })
  .then(res => {
    console.log(res.toString())
  }, err => {
    throw new Error('失败')
  })
  .catch(err => {   // 捕获错误
    console.log(err)
  })

  
  /*
  当[]中的所有promise都执行完才会触发then
Promise.all([promise1, 2, 3]).then()

then 中 接受到的 是  []中第一个执行完成的promise 
Promise.race([1,2,3]).then()
  */
