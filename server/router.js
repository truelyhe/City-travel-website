const express = require('express')
const router = express.Router()
var formidable = require("formidable")
const fs = require('fs')
// const url = require('url')
const path = require('path')
const db = require('./db')
const check = require('./check')
const checkLogin = check.checkLogin
const checkNotLogin = check.checkNotLogin


// 储存用户名密码
router.post('/api/admin/signup', function (req, res) {
  new db.User(req.body.userInfo).save(function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.send()
  })
})

// 用户登录
router.post('/api/admin/signin', function (req, res) {
  // req.session.user = req.body.userInfo
  res.send()
})

// 根据用户名获取用户
router.get('/api/admin/getUser/:name', function (req, res) {
  db.User.findOne({ name: req.params.name }, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.send(docs)
  })
})

// 获取所有用户
router.get('/api/admin/getAllUser', function (req, res) {
  db.User.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.json(docs)
  })
})

// 删除某个用户
router.post('/api/admin/deleteUser', function (req, res) {
  db.User.remove({_id: req.body._id}, function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.send()
  })
})

// 管理员登录
router.get('/api/admin/managerLogin', function (req, res) {
  db.Admin.find({}, function (err, docs) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    } else {
      if (req.query.account === docs[0].account && req.query.password === docs[0].password) {
        res.status(200).json({ errno: 0, msg: '账号密码正确' })
      } else {
        res.json({ errno: 401, msg: '账号密码错误' })
      }
    }
  })
})

 
// 图片上传服务器
router.post('/upload', function(req, res){
  const form = new formidable.IncomingForm()
  const targetFile = path.join(__dirname,'./upload') // 图片存放位置
  form.uploadDir = targetFile
  form.parse(req, function(err, fields, files) {
    if(err) throw err
    const oldpath = files.sampleFile.path // 修改图片名字
    const newpath = path.join(path.dirname(oldpath),files.sampleFile.name)
    fs.rename(oldpath,newpath,(err) => {
      if(err) throw err
      const content =  fs.readFile(newpath, "binary")
      res.writeHead(200, "Ok")
      res.write(content, "binary") //格式必须为 binary，否则会出错
      res.end('图片上传成功！')
      // res.send()
    })
  })
})


// 获取所有文章
router.get('/api/articleList', function (req, res) {
  db.Article.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.json(docs)
  })
})

// 文章详情页
router.get('/api/articleDetail/:id', function (req, res) {
  db.Article.findOne({ _id: req.params.id }, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.send(docs)
  })
})

// 文章保存
router.post('/api/admin/saveArticle', function (req, res) {
  new db.Article(req.body.articleInformation).save(function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '发布成功' })
  })
})

// 文章更新
router.post('/api/admin/updateArticle', function (req, res) {
  let info = req.body.articleInformation
  db.Article.find({_id: info._id}, function (err, docs) {
    if (err) {
      return
    }
    docs[0].title = info.title
    docs[0].date = info.date
    docs[0].content = info.content
    docs[0].coverImg = info.coverImg
    docs[0].gist = info.gist
    docs[0].labels = info.labels
    db.Article(docs[0]).save(function (err) {
      if (err) {
        res.status(500).send()
        return
      }
      res.status(200).json({ errno: 0, msg: '编辑成功' })
    })
  })
})

// 文章删除
router.post('/api/admin/deleteArticle', function (req, res) {
  db.Article.remove({_id: req.body._id}, function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '删除成功' })
  })
})




// 新闻发布
router.post('/api/admin/saveNews', function (req, res) {
  new db.News(req.body.newsInformation).save(function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '发布成功' })
  })
})

// 获取新闻列表
router.get('/api/newsList', function (req, res) {
  db.News.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.json(docs)
  })
})

// 新闻详情页
router.get('/api/newDetail/:id', function (req, res) {
  db.News.findOne({ _id: req.params.id }, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.send(docs)
  })
})

// 删除新闻
router.post('/api/admin/deleteNew', function (req, res) {
  db.News.remove({_id: req.body._id}, function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '删除成功' })
  })
})

// 发布通知公告
router.post('/api/admin/saveNotice', function (req, res) {
  new db.Notice(req.body.newsInformation).save(function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '发布成功' })
  })
})

// 获取公告列表
router.get('/api/noticeList', function (req, res) {
  db.Notice.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.json(docs)
  })
})

// 公告详情页
router.get('/api/noticeDetail/:id', function (req, res) {
  db.Notice.findOne({ _id: req.params.id }, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.send(docs)
  })
})

// 删除公告
router.post('/api/admin/deleteNotice', function (req, res) {
  db.Notice.remove({_id: req.body._id}, function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '删除成功' })
  })
})

// 发表旅游日志
router.post('/api/admin/saveDiary', function (req, res) {
  new db.Diary(req.body.diaryInformation).save(function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '发布成功' })
  })
})

// 获取日志列表
router.get('/api/diaryList', function (req, res) {
  db.Diary.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.json(docs)
  })
})

// 删除日志
router.post('/api/admin/deleteDiary', function (req, res) {
  db.Diary.remove({_id: req.body._id}, function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '删除成功' })
  })
})

// 发布留言
router.post('/api/pubMessage', function (req, res) {
  new db.Message(req.body).save(function (err) {
    if (err || !req.body) {
      res.status(500).json({ errno: 500, msg: '参数有误or服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '发布成功' })
  })
})

// 获取留言列表
router.get('/api/messageList', function (req, res) {
  db.Message.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.json(docs)
  })
})

// 删除留言
router.post('/api/admin/deleteMessage', function (req, res) {
  db.Message.remove({_id: req.body._id}, function (err) {
    if (err) {
      res.status(500).json({ errno: 500, msg: '服务器出错' })
      return
    }
    res.status(200).json({ errno: 0, msg: '删除成功' })
  })
})

// 获取美食列表
router.get('/api/foodList', function (req, res) {
  db.Foods.find({}, function (err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.json(docs)
  })
})

module.exports = router