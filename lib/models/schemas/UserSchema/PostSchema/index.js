const mongoose = require('mongoose')
const CommentSchema = require('./CommentSchema')

const PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  pictures: [String],
  likes: {
    from: [String],
    total: Number
  },
  comments: [CommentSchema]
})

module.exports = PostSchema
