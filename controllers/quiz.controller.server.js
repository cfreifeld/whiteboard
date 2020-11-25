
const quizDao = require('../daos/quiz.dao.server')
module.exports = function (app) {
  app.get('/api/quizzes', (req, res) =>
      quizDao.findAllQuizzes()
      .then(allQuizzes => res.json(allQuizzes)))
  app.get('/api/quizzes/:qzid', (req, res) =>
      quizDao.findQuizById(req.params['qzid'])
      .then(quiz => res.json(quiz)))
}
