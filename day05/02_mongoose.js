const express = require('express');
const db = require('./models/db')
const User = require('./models/User')
const Type = require('./models/Type')
const Lesson = require('./models/Lesson')
const app = express()

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

app.get('/type', (req, res) => {
  Type.create({
    type_name: 'WEB全栈'
  }, (err, results) => {
    if(err){
      console.log(err)
      return
    }else{
      console.log(results)
    }
  })
})

app.get('/lesson', (req, res) => {
  // 实例化  实体
  const lesson = new Lesson({
    lesson_name: 'java'
  })
  lesson.save(err => {
    if(!err) console.log('插入成功')
  })
})

app.get('/a', (req,res) => {
  User
    .find()
    .then(result => {
      console.log(result)
    })
})

app.get('/b', (req, res) => {
  User.remove({username: 'wally'}).then(res => {
    if(res){
      console.log('删除成功')
    }
  })
})

app.get('/c', (req, res) => {
  Lesson.update({lesson_name: 'java'}, {$set:{lesson_name: 'web'}}, {multi: true}).then(result => {
    if(result) res.send('更新成功')
  })
})

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});