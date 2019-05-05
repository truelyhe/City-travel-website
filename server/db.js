const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/trip')

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  avatarCount: Number
})

const articleSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String,
  coverImg: String,
  gist: String,
  labels: Array
})

const newsSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String
})

const noticeSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String
})

const diarySchema = new mongoose.Schema({
  title: String,
  content: String,
  images: Array,
  labels: Array,
  status: Boolean,
  date: String,
  // userid: String
  username: String,
  usercount: Number
})

const messageSchema = new mongoose.Schema({
  content: String,
  date: String,
  username: String,
  usercount: Number
})

const foodSchema = new mongoose.Schema({
  title: String,
  gist: String,
  images: String
})

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema),
  News: mongoose.model('News', newsSchema),
  Notice: mongoose.model('Notice', noticeSchema),
  Diary: mongoose.model('Diary', diarySchema),
  Message: mongoose.model('Message', messageSchema),
  Foods: mongoose.model('Foods', foodSchema)
}

module.exports = Models
