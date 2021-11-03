const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  register (req, res, next) {
    const { email } = req.body

    User
      .findOne({ email })
      .catch(err => console.log(err.toString()))
      .then(user => {
        if (user) {
          res.status(409).send({
            error: `User with email ${user.email} is already registered`
          })
          return
        }

        
        next()
      })
  }
}
