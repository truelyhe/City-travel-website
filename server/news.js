// const express = require('express')
// const news = express.Router()
// const fs = require('fs')
// const path = require('path')
// const db = require('./db')
// const check = require('./check')
// const checkLogin = check.checkLogin
// const checkNotLogin = check.checkNotLogin


// // 发表旅游日志
// news.post('/api/admin/saveDiary', function (req, res) {
//     new db.Diary(req.body.newsInformation).save(function (err) {
//       if (err) {
//         res.status(500).send()
//         return
//       }
//       res.send()
//     })
//   })
  
//   // 获取日志列表
//   news.get('/api/diaryList', function (req, res) {
//     db.Diary.find({}, function (err, docs) {
//       if (err) {
//         console.error(err)
//         return
//       }
//       res.json(docs)
//     })
//   })
  
//   // 删除日志
//   news.post('/api/admin/deleteDiary', function (req, res) {
//     db.Diary.remove({_id: req.body._id}, function (err) {
//       if (err) {
//         res.status(500).send()
//         return
//       }
//       res.send()
//     })
//   })

// module.exports = news