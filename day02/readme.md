# Node

## Global

### __filename

文件的绝对路径

### __dirname

文件所在文件夹得绝对路径

## Moduls模块系统

+ CommonJS(NODE)

  - 引模块 require(''), 原生的模块直接写名字就可以, 如果文件模块必须要写路径
  - exports
    是个对象, 一个页面可以出现多次, 用的时候要".",如:
``` js
// ./src/a.js
const A = 123
exports.num = A

/*
exports ==> {
num: A
}
*/

// 15_module.js
const a = require('./src/a.js')
// a => a.js 中的 exports对象
console.log(a.num) //123
```
  - module.exports
    一个页面只出现一次, 用的时候不需要".",如:
``` js
// ./src/b.js
const b = 'hello'
module.exports = b
// 15_module.js
const b = require('./src/b.js')
console.log(b)  // hello
```
+ CMD
+ AMD
+ ES6


## HTTP

### createServer

接受的参数是个回调函数callback

callback接受两个, 第一个是请求 request, 第二个参数是响应response

``` js
const http = require('http')
http.createServer((req, res) => {
  res.end('Hello')
}).listen(3000)
```

### request请求

#### req.url

请求的地址, 默认会有两个, 其中一个是收藏图标`/favicon.ico`

可以拿到地址, 也可以拿到查询字符串, 这样就可以通过分析url拿到get方式提交的数据

#### req.method

请求的方式, 如get/post

#### req.headers

拿到请求头

#### req.statusCode
状态码

#### req.statusMessage

状态信息

### response响应

#### end()
接受响应的,如果你不调用end,浏览器会处于个一个挂起的状态,就是一直转圈圈直到超时

end中可以接受一个参数, 参数的内容会显示到客户端页面上

#### write()

第一个参数就是返回给客户端的信息, 必选

**注**  一定要在end之前调用

#### writeHead(statusCode,headers)

比如设置响应内容是平文本`res.writeHead(200, {'Content-Type': 'text/plain'})`

比如设置响应内容是html内容`res.writeHead(200, {'Content-Type': 'text/html'})`

设置字符集编码`res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})`

#### setHeader(key, value)

如: `res.setHeader('Content-Type', 'text/plain;charset=utf-8')`

设置cookie: `res.setHeader('Set-Cookie', ['username=wally', 'password=123'])`

设置允许跨域:

``` js
// 允许任何地址请求  不存在跨域问题
res.setHeader('Access-Control-Allow-Origin', '*')
```

> **注:** writeHead 比  setHeader优先级更高

### listen

第一个参数: 监听的端口号
第二个参数: 地址
第三个参数: callback
如:

``` js
const http = require('http')
const server = http.createServer((req, res) => {
  res.write('hello 21')
  res.end()
})

server.listen(3000, '192.168.0.21', () =>{
  console.log('server is running on 192.168.0.21:3000')
})
```

## querystring

### querystring.escape(str)

编码

### querystring.unescape(str)

解码

### querystring.parse()

作用: 按照指定的方式将字符串解析成对象

一参是要解析的字符串

将第一个参数的字符串解析成对象, 默认找的是&和=, 如:

``` bash
> querystring.parse('username=123&password=dfa')
> { username: '123', password: 'dfa' }
```

第二个参数用来界定键值对分组的符号, 如:

``` bash
> querystring.parse('username=123@password=dfa','@')
> { username: '123', password: 'dfa' }
```

第三个参数是键与值中间的分隔符, 如:

``` bash
> querystring.parse('username*123@password*dfa','@')
> { 'username*123': '', 'password*dfa': '' }
> querystring.parse('username*123@password*dfa','@','*') 
> { username: '123', password: 'dfa' }
```

### querystring.stringify()

作用: 将对象 按照指定的方式 序列化为字符串

一参: 要序列化的对象,默认会用&链接一组键值对, =链接键与值
二参: 指定链接一组键值对的符号
三参: 指定链接键与值的符号

如:

``` bash
> querystring.stringify({ username: '123', password: 'dfa' })
> 'username=123&password=dfa'
```

## url

### url.parse(urlstring)

将字符串格式的url解析成对象格式

二参: 可选, 如果是true会调用querystring.parse方法将url中的query解析成对象格式

如文件`06_get.js`所示

## Buffer

Global挂的一个全局对象, 不需要require导入

处理二进制数据流

### toString()

将buffer 转换成 字符串

## Events

### on('eventName',callback)
监听eventName事件

### emit('eventName')
发射eventName事件

## 爬虫

### 模块

+ axios(request/superAgent)
  发请求
+ cheerio
  类似jQuery操作DOM

## FS 文件系统模块

### 读文件

#### fs.readFileSync

同步读取文件内容

``` js
const data = fs.readFileSync('./src/test.txt')
console.log(data)
```

#### fs.readFile(file[, options], callback)

异步读取文件内容

``` js
const fs = require('fs')

fs.readFile('./src/test.txt', (err, data) => {
  if(!err){
    console.log(data.toString())
  }else{
    throw new Error(err)
  }
})

console.log(123)
```

**错误优先的回调函数:** `(err, data) => {}`

### 写文件

#### fs.writeFile

异步写文件

```js
const fs = require('fs')

fs.writeFile('./src/test.txt', '你好,世界', {
  flag: 'a'
}, err => {
  if(!err){
    console.log('写入成功')
  }else{
    throw new Error(err)
  }
})
```

#### fs.writeFileSync

同步写文件

```js
fs.writeFileSync('./src/test.txt', '你好,世界', {
  flag: 'a'
})
```

### 指定位置读写文件

#### fs.open()

#### fs.read()

+ 一参：fd，必须是open方法使用的回调函数中返回的文件描述符
+ 二参：buffer，一个Buffer对象，指定将文件数据读取到哪个缓存区中
+ 三参：offset，指定向缓存区中写入数据时的开始写入位置（以字节为单位）
+ 四参：length，指定从文件中读取的字节数
+ 五参：position，指定读取文件时的开始位置（以字节为单位）
+ 六参：callback，function(err,bytesRead,buffer){}
  - bytesRead，一个整数值，代表实际读取的字节数
  - buffer，被读取的缓存区对象

### 文件夹操作

#### fs.mkdir()

创建文件夹,

``` js
const fs = require('fs')

fs.mkdir('./src/dir', err => {
  if(!err){
    console.log('创建目录成功')
  }
})
```

#### fs.readdir()

读取目录

``` js
fs.readdir('./src', (err, files) => {
  if(!err){
    console.log(files)
  }
})
```

### fs.stat

查看文件的信息
+ 一参: 路径
+ 二参: callback
  - err
  - stats
    - stats.isFile()  是否是文件
    - stats.isDirectory()  是否是文件夹

``` js
fs.readdir('./src', (err, files) => {
  if(!err){
    console.log(files)
    ;(function iterate(i){
      if(i===files.length) return
      let _path = './src/' + files[i]
      console.log(_path)
      fs.stat(_path, (err, stats) => {
        if(!err){
          console.log(stats.isFile())
          iterate(i+1)
        }
      })
    })(0)
  }
})
```