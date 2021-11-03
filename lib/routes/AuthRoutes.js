const AuthControllerPolicy = require('../middlewares/local/AuthControllerPolicy')
const AuthController = require('../controllers/AuthController')

module.exports = app => {
  app.route('/auth/register')
    .post(
      AuthControllerPolicy.register,
      AuthController.register
    )
  
  app.route('/auth/login')
    .post(
      AuthController.login
    )

  app.route('/auth/check-token')
    .post(
      AuthController.checkToken
    )
}
