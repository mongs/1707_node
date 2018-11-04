## MongoDB 

### 一、权限管理

#### 1. 创建超级管理员

```
// 超级管理员只能是admin
$ use admin

// 创建超级管理员
db.createUser({
  user: 'admin',
  pwd: '111111',
  roles: [{role: 'root', db: 'admin'}]
})
```

#### 2. 修改数据库配置文件

路径: `C:\Program Files\MongoDB\Server\4.0\bin\mongod.cfg`

配置: 

```
security:
  authorization: enabled
```

#### 3. 重启服务

windows 运行: `services.msc`

找到`MongoDB Server`, 右键重启

#### 4. 使用超级管理员账号连接数据库

```
$ mongo admin -u <user> -p <pwd>

// 远程
$ mongo 192.168.1.101:27017/egg -u <user> -p <pwd>
```

#### 5. 给数据库egg-test创建一个用户

```
use egg-test

db.createUser({
  user: 'eggAdmin',
  pwd: '111111',
  roles: [
    {role: 'dbOwner', db: 'egg-test'}
  ]
})

```

#### 6. 连接指定数据库

```
$ mongo egg-test -u eggAdmin -p 111111
```

#### 7. 其他相关命令

```
// 
```

### 二、MongoDB 命令

``` bash
// 显示所有数据库
$ show dbs

// 切换/使用指定数据库
$ use <dbName>

// 查看数据库的所有用户
$ show users

// 删除用户
$ db.dropUser('<user>')

// 修改用户密码
$ db.updateUser('eggAdmin', {pwd: '123456'})

// 密码认证
db.auth('admin', '111111')

// 创建超级管理员
db.createUser({
  user: 'admin',
  pwd: '111111',
  roles: [{role: 'root', db: 'admin'}]
})

// 显示所有集合
$ show collections

// 插入数据
$ db.users.insert({username: 'wally'})

// 查看所有数据
$ db.users.find();
```

### 三、数据库角色

#### 1. 数据库用户角色

+ read
+ readWrite

#### 2. 数据库管理角色

+ dbAdmin
+ dbOwner
+ userAdmin

#### 3. 集群管理角色:

+ clusterAdmin
+ clusterManager
+ clusterMonitor
+ hostManager

#### 4. 备份恢复角色

+ backup
+ restore

#### 5. 所有数据库角色

+ readAnyDatabase
+ readWriteAnyDatabase
+ userAdminAnyDatabase
+ dbAdminAnyDatabase

#### 6. 超级用户角色

+ root

### 四、连接数据库

``` js
const url = 'mongodb://admin:111111@localhost:27017'
```

## egg mongodb

使用模块`egg-mongo-native`

[egg-mongo-native文档](https://www.npmjs.com/package/egg-mongo-native)

[egg-mongo-native中文文档](https://github.com/brickyang/egg-mongo-native/blob/master/README.zh_CN.md)

### 1. $project

修改文档的结构,可以用来重命名、增加和删除文档中的字段。

要求查找order只返回文档中 trade_no和 all_price字段。

``` js
db.order.aggregate([
  {
    $project:{ trade_no:1, all_price:1 },
  },
])
```

### 2. $match

用于过滤文档。用法类似于 find() 方法中的参数。

``` js
db.order.aggregate([
  {
    $project:{ trade_no:1, all_price:1 },
  },
  {
    $match:{"all_price":{$gte:90}},
  },
]);
```

### 3. $group

分组

``` js
db.order_item.aggregate([
  {
    $group: { _id: "$order_id", total: { $sum: "$num" } }
  }
])
```

### 4. $sort

将集合中的文档进行排序

``` js
db.order.aggregate([
  {	
    $project:{ trade_no: 1, all_price: 1 },
  },
  {
    $match:{ "all_price": { $gte: 90 } },
  },
  {
    $sort:{ "all_price": -1 },
  },
]);
```

### 5. $limit

限制条数

``` js
db.order.aggregate([
  {	
    $project: { trade_no: 1, all_price: 1 },
  },
  {
    $match: { "all_price": { $gte: 90 } },
  },
  {
    $sort: { "all_price": -1 },
  },
  {
    $limit: 1,
  },
]);
```

### 6. $skip

跳过

``` js
db.order.aggregate([
  {	
    $project: { trade_no: 1, all_price: 1 },
  },
  {
    $match: { "all_price": { $gte: 90 } },
  },
  {
    $sort: { "all_price": -1 },
  },
  {
    $skip: 1,
  },
]);
```

### 7. $lookup表关联

``` js
db.order.aggregate([
  {
    $lookup: {
      from: "order_item",
      localField: "order_id",
      foreignField: "order_id",
      as: "items",
    },
  },
])
```
## mongoose

使用模块`mongoose`

### 1. 修饰符

对增加的数据进行格式化，定义schema时使用

#### 预定义修饰符

+ trim
+ uppercase
+ lowercase

``` js
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  }
})
```

#### 自定义修饰符

set方法在增加数据时对数据进行格式化。

``` js
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    set(name) {
      if (!name) return;
      return 'hello ' + name;
    }
  }
})
```

get （不建议使用）在 **实例获取数据** 的时候对数据进行格式化。

``` js
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    set(name) {
      if (!name) return;
      return 'hello ' + name;
    },
    get(name) {
      if (!name) return;
      return 'hello ' + name;
    }
  }
})
```

### 2. 索引

索引是对数据库表中一列或多列的值进行排序的一种结构，可以让我们查询数据库变得
更快。 MongoDB 的索引几乎与传统的关系型数据库一模一样， 这其中也包括一些基本的查
询优化技巧。

#### mongoDB索引

+ 创建索引

``` js
db.user.ensureIndex({ "username": 1 })
```

+ 获取当前集合的索引

``` js
db.user.getIndexes()
```

+ 删除索引

``` js
db.user.dropIndex({"username":1})
```

+ 唯一索引unique

``` js
db.user.ensureIndex({ "userid": 1 }, { "unique": true })
```

#### mongoose索引

+ 唯一索引`unique: true`

+ 普通索引`index: true`

``` js
var DeviceSchema = new mongoose.Schema({
  sn: {
    type: Number,
    // 唯一索引
    unique: true
  },
  name: {
    type: String,
    // 普通索引
    index: true
  }
});
```

### 3. 扩展方法

+ 静态方法

``` js
UserSchema.statics.findByUid = function(uid, cb) {
  this.find({ "_id": uid }, function(err, docs) {
    cb(err, docs)
  })
}
```

+ 实例方法

``` js
UserSchema.methods.print = function() {
  console.log('这是一个实例方法');
  console.log(this);
};
```

## egg-mongoose