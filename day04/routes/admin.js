const express = require('express')
const Router = express.Router()

// /admin
Router.get('/', (req,res) => {
	res.send('/admin')
})
// /admin/login
Router.get('/login', (req,res) => {
	res.send('/admin/login')
})

module.exports = Router