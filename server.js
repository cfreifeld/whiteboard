const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./data/db')()

require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)
//require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 3000)
