# Node.js

## 追加数据到文件底部

fs.appendFile, 如:

``` js
const fs = require('fs')
fs.appendFile('./src/b.txt', 'Hello', err => {
  if(!err) console.log('追加成功')
})
```

## 移动(重命名)文件或目录

fs.rename, 如:

``` js
const fs = require('fs')

fs.mkdir('./dir', err => {
  if(!err){
    fs.rename('./src/c.txt', './dir/hello.txt', err => {
      if(!err) {
        console.log('移动成功')
      }else{
        console.log(err)
      }
    })
  }
})
```

## 流

### 可读流

``` js
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

```

### 可写流

``` js
const fs = require('fs')
// 创建可读流
const WriteStream = fs.createWriteStream('./dir/hello.txt')

WriteStream.write('hello hi', () => {
  console.log('写入成功')
```

## 静态伺服

Nodejs提供都是非常底层的东西, 没有静态资源的伺服能力. Express

``` js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  if(req.url === '/index'){
    fs.readFile('./src/index.html', (err, data) => {
      if(!err){
        res.end(data)
      }
    })
  }else if(req.url === '/about'){
    fs.readFile('./src/about.html', (err, data) => {
      if(!err){
        res.end(data)
      }
    })
  }else if(req.url === '/base.css'){
    res.setHeader('Content-Type', 'text/css;charset=utf-8')
    fs.readFile('./src/base.css', (err, data) => {
      if(!err){
        res.end(data)
      }
    })
  }else{
    res.end('404')
  }
})

server.listen(3000, () => {
  console.log('running')
})
```

## Express

> Node.js 路由处理比较混乱, 没有静态资源管理的能力, 没有模板引擎。Express是一个轻量快速的Nodejs框架， 提供了很好的路由处理能力、静态资源管理能力、模板引擎及中间件。

[官网](www.expressjs.com)

[中文官网](www.expressjs.com.cn)

### 安装

`npm i express --save`

生成器安装： `npm install express-generator -g`。生成器可以快速生成express项目的基本模板