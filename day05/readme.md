# MongoDB

## 简介

### NoSQL

非关系型数据库, 没有行、列的概念。用JSON来存储数据。

集合 就相当于  表
文档 就相当于  行

适用场景：

1、数据模型比较简单；
2、需要灵活性更强的IT系统；
3、对数据库性能要求较高；
4、不需要高度的数据一致性；
5、对于给定key，比较容易映射复杂值的环境

### MongoDB

就是一个NoSQL数据库， 文档型数据库


## 安装

### 配置环境变量

默认安装目录: `C:\Program Files\MongoDB\Server\3.4\bin`

在系统变量path中将`C:\Program Files\MongoDB\Server\3.4\bin`加入环境变量, 这样就可以在任何目录使用mongodb的命令

## 常用命令

### 开机 

`mongod`是开机, `mongod --dbpath=<存放路径>`如： ` mongod --dbpath=G:\Neo\Sram\Swt1707\13_Node\day05\db`

要想使用数据库， 必须保证数据库是在开机状态

关闭数据库， ctrl+c退出即可

### 使用数据库

`mongo`， 在数据库开机的状态下， 输入monogo 会进入mongodb的REPL环境

### 导入

`mongoimport`

## 查看数据库

`show dbs`

## 使用或者创建数据库

`use <数据库的名字>`， 如果不存在就会新建

## 查看当前所在的数据库

`db`

## 插入数据

`db.<集合名>.insert({key:value})`, 集合存在则直接插入，不存在创建并插入

## 查看集合中的文档

### 查询所有

`db.<集合名>.find()`

### 按条件查询

` db.students.find({age: 17})`

### 多条件匹配

`db.students.find({age: 17,sex:'man'})`

pretty() 格式化查询结果

`db.students.find({age: 17,sex:'man'}).pretty()`

### 大于条件

`db.students.find({age:{$gt:20}})`

### 小于条件

`db.students.find({age:{$lt:20}})`

### 或者

`db.students.find({$or:[{age:21},{age:19}]})`

### 升序

`db.students.find().sort({age:1})`

### 降序

`db.students.find().sort({age:-1})`

## 分页查询

+ limit()  限制每一页显示几条
+ skip()   跳过几条数据

`db.students.find().limit(2).skip(2)`

## 修改数据

修改的是匹配的第一条数据：

`db.students.update({age:17,sex:'weman'},{$set:{name:'lisi'}})`

修改所有匹配项

`db.students.update({age:18},{$set:{age:17}},{multi:true})`

完整替换

`db.students.update({age:17},{name:'wangwu',sex:'man'})`

## 删除

默认删除所有匹配条件的数据

`db.students.remove({job: 'java'})`

删除第一条匹配的数据

`db.students.remove({job: 'java'},1)`

## Mongoose

[文档](http://mongoosejs.com/docs/guide.html)

### 安装

`npm i mongoose --save`

### 连接

``` js
/**
 * 用来连接数据库
 * db.js
 */

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/swt1707',{
  useMongoClient: true
})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("数据库连接成功")
});

module.exports = db
```

### 概念

+ Schema 结构

  定义这个集合 有哪些字段, 字段是什么类型, 或者可以指定默认值

+ Model

+ 实体  

### 定义Schema结构

``` js
// 定义结构
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  create_time: {
    type: Date,
    default: Date.now   // 默认值
  }
})
```

### 定义model模型

``` js
// 定义 model 模型
const UserModel = mongoose.model('User', UserSchema)
```
### Model 插入文档的方法

Mongoose提供了两套方法, 一种是实体 上的方法, 一种是model上的方法

```js
User.create({
  username: 'wally',
  password: 'admin'
}, (err, result) => {
  if(err){
    console.log(err) 
    return
  }else{
    console.log(result)
  }
})
```

### find() 查询所有

``` js
app.get('/a', (req,res) => {
  User
    .find()
    .then(result => {
      console.log(result)
    })
})
```

### findOne() 找到一条

``` js
app.get('/register', (req, res) => {
  User.findOne({username:'wally'}).then(result => {
    if(result){
      res.send('用户已被注册')
    }else{
      User.create({
        username: 'wally',
        password: 'admin'
      }, (err, result) => {
        if(err){
          console.log(err) 
          return
        }else{
          console.log(result)
        }
      })
    }
  })
})
```