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