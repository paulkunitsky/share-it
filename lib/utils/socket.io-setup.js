const fs = require('fs')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Talk = mongoose.model('Talk')

function getTalks () {
  return fs.readFileSync('talks.json')
}
function rewriteTalks (t) {
  fs.writeFileSync('talks.json', JSON.stringify(t, null, 2), 'utf8')
}

module.exports = io => {
  io.on('connection', socket => {
    io.emit('user:online', userID)

    socket.on('talks:join', talk => {
      io.in(talk).emit('msg:send', `a new user joined ${talk}`)
    })

    socket.on('msg:send', ({talk, msg}) => {
      io.in(talk).emit('msg:send', msg)
    })

    socket.on('disconnect', () => {
      io.emit('user:offline', userID)
    })
  })
}
