const mongoose = require('mongoose')
const questionSchema = require('../models/question.schema.server')
const questionModel = mongoose.model('QuestionModel', questionSchema)
const quizSchema = mongoose.Schema({
  title: {type: String, required: true},
  date: Date,
  topics: [String],
  questions: [{type: mongoose.Schema.ObjectId, ref: 'QuestionModel'}]
}, {timestamps: true, collection: 'quizzes'})

module.exports = quizSchema
