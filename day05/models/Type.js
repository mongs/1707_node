const mongoose = require('mongoose')

const TypeSchema = new mongoose.Schema({
  type_name: String,
  create_time: {
    type: Date,
    default: Date.now
  }
})

const TypeModel = mongoose.model('Type', TypeSchema)

module.exports = TypeModel