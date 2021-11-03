const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtGetToken (user) {
  const { expiresIn } = config.jwt
  const token = jwt.sign(user, config.jwt.secret, {
    expiresIn
  })
  return token
}

function jwtCheckToken (token) {
  try {
    const decoded = jwt.verify(token, config.jwt.secret)
    return (decoded)
      ? true
      : false
  } catch (err) {
    console.log(err.toString())
    return false
  }
}

module.exports = {
  register (req, res) {
    const { fullname, email, password } = req.body
    
    new User({
      fullname,
      email,
      password
    })
      .save()
      .then(user => {
        res.send(user)
      })
      .catch(error => {
        res.status(400).send({ error })
      })
  },

  login (req, res) {
    const { email, password } = req.body

    User
      .findOne({ email })
      .catch(err => {
        res.status(400).send(err)
      })
      .then(async user => {
        const error = 'The email and password you entered did not match our records. Please double-check and try again.'

        if (!user) {
          res.status(401).send({ error })
          return
        }

        const confirmed = await user.comparePassword(password)
        if (!confirmed) {
          res.status(401).send({ error })
          return
        }

        res.status(200).send({
          user,
          token: jwtGetToken(user.toObject())
        })
      })
  },

  checkToken (req, res) {
    const { token } = req.body

    if (!token) {
      res.send({
        valid: false,
        error: 'no token provided'
      })
      return
    }

    res.send({
      valid: jwtCheckToken(token)
    })
  }
}
