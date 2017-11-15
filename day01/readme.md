# NodeJS

## 简介
[官网](https://nodejs.org/)
[中文官网](http://nodejs.cn/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Node.js 是构建在 Chrome的 V8引擎上的一个js运行时

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
事件驱动(回调函数)
非阻塞异步I/O
单线程单进程

Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

## 作者
Ryan Dahl

## 适用场景

+ 高并发(双11)
+ 站内信
+ 实时聊天
+ 不适合大量计算

## Global

在浏览器中全局对象(顶层对象)是window
在Node中全局对象叫 global

+ Buffer
+ process
+ console
+ setTimeout
+ setInterval
+ clearTimeout
+ clearInterval
+ module

## REPL环境

进入方法, 在cmd中输入node, 然后enter就可以进入node的REPL环境.

+ Read  读，读取用户输入，解析输入的JS数据结构并存储在内存中
+ Eval  执行， 执行输入的数据结构
+ Print  打印，输出结果
+ Loop  循环，循环操作以上步骤，直到ctrl+c以后

退出REPL环境, 两次ctrl+c

## 运行Node.js代码

`$ node <文件名>`


