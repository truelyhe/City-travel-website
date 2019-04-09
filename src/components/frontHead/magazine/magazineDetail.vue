<template>
  <div>
    <div class="edit_wrap">
      <div class="return_button">
        <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
      </div>
      <h2>发表日志</h2>
      <div class="edit_head">标题</div>
      <el-input v-model="title" placeholder="请输入标题"></el-input>
      <div class="tag_wrap">
        <span>标签: </span>
        <el-tag
          class="tag_margin"
          :key="tag"
          v-for="tag in labels"
          :closable="true"
          :close-trasition="true"
          @close="handleClose(tag)"
          type="primary"
        >{{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
      <div id="div3"></div>
      <div class="save_button">
        <el-button type="primary" @click="saveArticle">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/atom-one-light.css'
import { apiUrl } from '@/api/config'
var E = require('wangeditor')// 使用 npm 安装

export default {
  name: 'articleEdit',
  data () {
    return {
      title: '',
      date: '',
      content: '',
      editorContent: '',
      gist: '',
      labels: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  mounted () {
    // 声明富文本
    var editor = new E('#div3')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
      // this.editorContent = editor.txt.text()
    }
    editor.create()
    // // 获取日志详情
    // if (this.$route.params.id) {
    //   this.$http.get(apiUrl + '/api/articleDetail/' + this.$route.params.id).then(
    //     response => {
    //       let article = response.body
    //       this.title = article.title
    //       this.date = article.date
    //       this.content = article.content
    //       this.gist = article.gist
    //       this.labels = article.labels
    //     },
    //     response => console.log(response)
    //   )
    // }
  },
  methods: {
    // 获取发表时间
    getDate () {
      let mydate, y, m, d, hh, mm, ss
      mydate = new Date()
      y = mydate.getFullYear()
      m = mydate.getMonth()
      d = mydate.getDate()
      hh = mydate.getHours()
      mm = mydate.getMinutes()
      ss = mydate.getSeconds()
      if (m < 10) m = '0' + m
      if (d < 10) d = '0' + d
      if (hh < 10) hh = '0' + hh
      if (mm < 10) mm = '0' + mm
      if (ss < 10) ss = '0' + ss
      this.date = y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
    },
    // 保存日志
    saveArticle () {
      let txtLength = this.editorContent.replace(/[^\-\xff]/g, '01').length
      let self = this
      if (!this.title.length) {
        this.$notify({
          title: '提醒',
          message: '请输入标题',
          type: 'warning'
        })
        return
      }
      console.log(this.editorContent)
      if (!this.editorContent) {
        this.$notify({
          title: '提醒',
          message: '请输入内容',
          type: 'warning'
        })
        return
      }
      // 获取时间
      this.getDate()
      let obj = {
        title: this.title,
        content: this.editorContent,
        images: [],
        labels: this.labels,
        status: txtLength > 300,
        date: this.date,
        username: this.$route.query.name,
        usercount: this.$route.query.avatarCount
      }
      this.$http.post(apiUrl + '/api/admin/saveDiary', {
        diaryInformation: obj
      }).then(
        response => {
          self.$message({
            message: '发表日志成功',
            type: 'success'
          })
          // 保存成功后跳转至文章列表页
          self.refreshArticleList()
        },
        response => console.log(response)
      )
    },
    // 保存成功后跳转至日志页
    refreshArticleList () {
      this.$router.push({name: 'magazine'})
    },
    goBack () {
      this.$router.go(-1)
    },
    // element标签组件
    handleClose (tag) {
      this.labels.splice(this.labels.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) this.labels.push(inputValue)
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .edit_wrap {
    padding: 40px 100px;
    font-size: 16px;
    h2 {
      text-align: center;
      letter-spacing: 2px;
    }
    .return_button {
      text-align: left;
      margin-bottom: 40px;
    }
    .tag_wrap {
      text-align: left;
      padding: 20px 0;
    }

    .tag_wrap .input-new-tag {
      width: 80px;
      height: 28px;
    }
    .edit_wrap textarea {
      outline: none;
      font-size: 16px;
    }
    .edit_head {
      margin: 20px 0;
      text-align: left;
    }
    .save_button {
      padding: 40px 0;
    }
  }
</style>
