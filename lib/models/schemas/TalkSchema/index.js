const mongoose = require('mongoose')
const MessageSchema = require('./MessageSchema')

const TalkSchema = new mongoose.Schema({
  accessRestricted: Boolean,
  usersIDs: [String],
  messages: [MessageSchema]
})

/**
 * custom class method: Talk.findByUserID
 */
TalkSchema.statics.findByUserID = function (userID) {
  const Talk = this

  return Talk.find({'userIDs.id': userID})
}

module.exports = TalkSchema
