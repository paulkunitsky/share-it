module.exports = {
  port: 8081,
  jwt: {
    secret: 'secret',
    expiresIn: '1d'
  },
  mongoURI: 'mongodb+srv://admin:admin@cluster0.fi6fq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' // local alternative 'mongodb://localhost/shareit'
}
