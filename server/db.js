const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/trip')

const userSchema = new mongoose.Schema({
  name: String,
  password: String
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

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema),
  News: mongoose.model('News', newsSchema)
}

module.exports = Models
