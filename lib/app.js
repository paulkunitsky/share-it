const Promise = require('bluebird')
const express = require('express')
const app = express()
const server = Promise.promisifyAll(require('http').Server(app))
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const config = require('./config')

require('./models')
require('./middlewares/global')(app)
require('./routes')(app)

require('./utils/socket.io-setup')(io)

mongoose.Promise = Promise
mongoose
  .connect(config.mongoURI)
  .then(_ => server.listenAsync(config.port))
  .then(_ => console.log(`server is serving on port ${config.port}`))
