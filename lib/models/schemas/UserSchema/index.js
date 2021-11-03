const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

const mongoose = require('mongoose')
const PostSchema = require('./PostSchema')
const { isEmail } = require('validator')
const jwt = require('jsonwebtoken')
const config = require('../../../config')

const UserSchema = new mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => isEmail(v),
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 32
  },
  birthday: String,
  imgURL: {
    sm: String,
    md: String,
    lg: String
  },
  posts: [PostSchema]
})

/**
 * custom class method: User.findByIDs
 */
UserSchema.statics.findByIDs = function (usersIDs) {
  const User = this

  const promises = usersIDs.map(userID => {
    return User.findById(userID)
  })
  
  return Promise.all(promises)
}

/**
 * custom instance method: user.comparePassword
 */
UserSchema.methods.comparePassword = function (password) {
 return bcrypt.compareAsync(password, this.password)
}

/**
 * hash the password every time before saving to database
 */
UserSchema.pre('save', function (next) {
  const user = this

  bcrypt
    .hashAsync(user.password, 10)
    .then(hash => {
      user.password = hash
      next()
    })
    .catch(err => {
      next(err)
    })
})

module.exports = UserSchema
