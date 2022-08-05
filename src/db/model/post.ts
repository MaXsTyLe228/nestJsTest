const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ordersSchema = new Schema({
  image: {type: String},
  title: {type: String},
  category: {type: String},
  date: {type: Date},
  short_description: {type: String},
  full_description: {type: String},
  likes: {type: Number},
}, {timestamps: true})

const Post = mongoose.model('Post', ordersSchema)

module.exports = Post