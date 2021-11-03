const TalksController = require('../controllers/TalksController')

module.exports = app => {
  app.route(':userID/chats')
    .get(
      TalksController.getTalks
    )
}
