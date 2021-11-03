const express = require('express')
const fs = require('fs')
const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js')

module.exports = app => {
  files.forEach(file => {
    require(`./${file}`)(app)
  })

  if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    const distDir = path.join(__dirname, '../../client/dist')

    app.use(express.static(distDir))
    app.get('*', (req, res) => {
      res.sendFile(path.join(distDir, 'index.html'))
    })
  }
}
