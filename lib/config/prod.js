module.exports = {
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  },
  mongoURI: process.env.MONGO_URI
}
