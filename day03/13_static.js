const express = require('express')
const app = express()

/**
 * 指定public中的内容都是静态资源
 * /css/base.css  -> public-> css -> base.css
 * /img -> public -> img
 * /img/a.jpg ->  public -> img -> a.jpg
 * 
 * 假如你在html文件中引 base.css  href="/css/base.css"
 * 
 * 静态资源  可以设置多个 
 */
app.use(express.static('public'));
/**
 * /public/hello.txt   -> dir -> hello.txt
 */
app.use('/public', express.static('dir'))

app.listen(3000)