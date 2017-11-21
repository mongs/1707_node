/**
 * 系统管理员 model
 * @type {*}
 */
const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
	username: String,
	password: String
})

const AdminModel = mongoose.model('Admin', AdminSchema)

module.exports = AdminModel