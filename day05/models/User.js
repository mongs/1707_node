const mongoose = require('mongoose')

// 定义结构
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
})

// 定义 model 模型
const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel