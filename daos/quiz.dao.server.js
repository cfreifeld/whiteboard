const mongoose = require('mongoose')
const quizSchema = require('../models/quiz.schema.server')
const quizModel = mongoose.model('QuizModel', quizSchema)

const findAllQuizzes = () => quizModel.find()
const findQuizById = (qid) => quizModel.findById(qid).populate('questions').exec()
const createQuiz = (quiz) => quizModel.create(quiz)

module.exports = {findAllQuizzes, findQuizById, createQuiz}
