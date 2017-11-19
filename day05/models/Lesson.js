const mongoose = require('mongoose')

const LessonSchema = new mongoose.Schema({
  lesson_name: String,
  create_time: {
    type: Date,
    default: Date.now
  }
})

const LessonModel = mongoose.model('Lesson', LessonSchema)

module.exports = LessonModel