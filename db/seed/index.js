/**
 * 1. drops users collection
 * 2. seeds .json files data to collections
 */
function seed () {
  const Promise = require('bluebird')
  const mongoose = require('mongoose')
  const config = require('../../lib/config')
  
  const { User } = require('../../lib/models')
  const users = require('./users.json')

  mongoose.Promise = Promise
  mongoose
    .connect(config.mongoURI, { useMongoClient: true })
    .then(_ => User.collection.drop())
    .then(_ =>
      Promise.all(
        users.map(user => new User(user).save())
      )
    )
    .then(_ => mongoose.connection.close())
}

if (process.env.NODE_ENV !== 'production') seed()
