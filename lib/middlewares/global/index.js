/**
 * this directory contains global middleware
 * for express app
 */
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

module.exports = app => {
  /** external global middlewares */
  app.use(morgan('tiny'))
  app.use(cors())
  app.use(bodyParser.json())
}
