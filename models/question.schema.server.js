const mongoose = require('mongoose')
// const quizSchema = require('../models/quiz.schema.server')
// const quizModel = mongoose.model('QuizModel', quizSchema)
const questionSchema = mongoose.Schema({
  prompt: {type: String, required: true},
  type: String,
  points: Number,
  correctAnswer: String,
  quizId: {type: mongoose.Schema.Types.ObjectId, ref: 'QuizModel'}
}, {timestamps: true, collection: 'questions'})

module.exports = questionSchema
