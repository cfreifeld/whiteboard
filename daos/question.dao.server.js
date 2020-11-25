const mongoose = require('mongoose')
const questionSchema = require('../models/question.schema.server')
const questionModel = mongoose.model('QuestionModel', questionSchema)

const findAllQuestions = () => questionModel.find()
const findQuestionById = (qid) => questionModel.findById(qid).populate('quizId').exec()
const createQuestion = (question) => questionModel.create(question)
const findQuestionsForQuiz = (quizId) => questionModel.find({quizId: quizId})
const updateQuestion = (question) => questionModel.updateOne({_id: question._id},
    {$set: question})
const overwriteQuestion = (question) => questionModel.updateOne({_id: question._id},
    question)

module.exports = {findAllQuestions, findQuestionById, createQuestion,
findQuestionsForQuiz, updateQuestion, overwriteQuestion}
