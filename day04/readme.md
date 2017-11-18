# EXPRESS

## 目录结构

+ app.js  入口文件
+ public  静态资源
+ views   视图模板
+ routes  路由

## 模块

+ express  NODE框架
+ ejs      模板引擎

## 中间件

在请求与响应  中间 业务处理的  "部件"。

使用 use 插入中间件

## 静态资源

一般都放在public目录, 如:css, js, img, fonts都算作静态资源

可以设置多个静态资源

还可以设置虚拟地址, 如: '/static'

``` js
// 静态资源 中间节
app.use(express.static(path.resolve(__dirname, 'public')))
```

## 模板引擎

ejs 不需要require 包的, 直接set就可以

```js
// 模板引擎  ejs
app.set('view engine', 'ejs')
```

模板一般都放到views目录下, 如果想放到别的目录, 需要设置, 比如需要放到 my-views 目录下, 设置如下: 

```js
// 设置模板存放的目录
app.set('views', './my-views')
```

常用的模板:

+ ejs
+ jade/pug
    因版权改名为pug
    完全没有标签, 靠缩进的一种语法
+ handlebars
+ swing

### 渲染模板

`res.render()`

函数的第一个参数是 视图的名称
第二个参数是 给模板传递的数据 是个 对象{}

## ejs

### 赋值

```js
res.render('index', {
  title: '首页'
})
```

`<%= xxx %>`, 如: `<h1><%= title %></h1>`

### 遍历

```js
res.render('index', {
  title: '首页',
  students: ['张三', '李四', '王五']
})
```

```ejs
<% for(let i=0;i<students.length;i++){ %>
  <div><%= students[i] %></div>
<% } %>
```

### if

```ejs
<% if(true){ %>
    ...
<% } %>
```

### include

可以把公共部分或者一个代码片段独立成ejs文件,然后通过`<%- include xxx.ejs %>`
导入