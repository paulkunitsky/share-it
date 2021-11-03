const mongoose = require('mongoose')
const Talk = mongoose.model('Talk')

module.exports = {
  getTalks (req, res) {
    // fetch all talks for user
    const {userID} = req.params
    console.log(`userID from req.body: ${userID}`)

    Talk
      .findOne({
        'users.userID': userID
      })
      .then(talks => {
        console.log(`talks found in db: ${talks}`)
        res.send(talks)
      })
  }
}
