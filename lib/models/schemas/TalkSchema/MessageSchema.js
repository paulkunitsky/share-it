const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  userID: String,
  text: String,
  dateSent: Date
})

module.exports = MessageSchema
