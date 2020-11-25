
const questionDao = require('../daos/question.dao.server')
module.exports = function(app) {
  app.get('/api/quizzes/:qid/questions', (req, res) =>
      questionDao.findQuestionsForQuiz(req.params['qid'])
      .then(questions => res.json(questions)))
  app.get('/api/questions', (req, res) =>
      questionDao.findAllQuestions()
      .then(allQuestions => res.json(allQuestions)))
  app.get('/api/questions/:qid', (req, res) =>
      questionDao.findQuestionById(req.params['qid'])
      .then(question => res.json(question)))
  app.post('/api/questions', (req, res) =>
      questionDao.createQuestion(req.body)
      .then(question => res.json(question))
  )
  app.patch('/api/questions', (req, res) =>
      questionDao.updateQuestion(req.body)
      .then(q => res.json(q))
  )
}
