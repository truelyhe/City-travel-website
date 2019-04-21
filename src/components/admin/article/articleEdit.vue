<template>
  <div>
    <div class="edit_wrapper">
      <div class="return_button">
        <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
      </div>
      <h2>发布推文</h2>
      <div class="edit_head">标题:</div>
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
      <div class="edit_head">
        <span>简介:</span>
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入简介"
          v-model="gist">
        </el-input>
        封面图:
        <div class="cover-img">
          <form
            target="posthere"
            ref='uploadForm'
            id='uploadForm'
            action='http://localhost:3000/upload'
            method='post'
            encType="multipart/form-data">
            <input id="file" type="file" name="sampleFile" @change="changeImg"/>
          </form>
          <iframe name="posthere" frameborder=0 width=0 height=0></iframe>
        </div>
     </div>
      <!-- <input type="file" accept="image/jpg" @change="changeAvatar"/> -->
      <div class="edit_head">内容:</div>
      <div id="div3">
        <!-- <el-input placeholder="请输入内容" v-model="editorContent" v-html="editorContent"></el-input> -->
      </div>
      <div class="save_button">
        <el-button type="primary" @click="saveArticle">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
// import marked from 'marked'
// import hightlight from 'highlight.js'
import '@/assets/atom-one-light.css'
import { apiUrl } from '@/api/config'
var E = require('wangeditor')
var editor = new E('#div3')

export default {
  data () {
    return {
      title: '', // 标题
      date: '', // 时间
      content: '', // 内容
      editorContent: '',
      gist: '', // 简介
      labels: [], // 标签
      coverImg: '', // 封面图
      inputVisible: false,
      inputValue: ''
    }
  },
  activated () {
    this.getDetailFn()
  },
  mounted () {
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  },
  methods: {
    // 获取详情
    getDetailFn () {
      if (this.$route.params.id) {
        this.$http.get(apiUrl + '/api/articleDetail/' + this.$route.params.id).then(
          response => {
            let article = response.body
            this.title = article.title
            this.date = article.date
            this.editorContent = article.content
            this.gist = article.gist
            this.labels = article.labels
            editor.txt.html('<p>' + this.editorContent + '</p>')
          },
          response => console.log(response)
        )
      }
    },
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
    changeImg (e) {
      // console.log(window.URL.createObjectURL(e.target.files[0]))
      // // this.coverImg = e.target.files[0].name
      // this.coverImg = window.URL.createObjectURL(e.target.files[0])
    },
    // 保存文章
    saveArticle () {
      // let self = this
      if (this.title.length === 0) {
        this.$notify({
          title: '提醒',
          message: '请输入标题',
          type: 'warning'
        })
        return
      }
      if (!this.editorContent) {
        this.$notify({
          title: '提醒',
          message: '请输入内容',
          type: 'warning'
        })
        return
      }
      if (this.gist.length === 0) {
        this.$notify({
          title: '提醒',
          message: '请输入简介',
          type: 'warning'
        })
        return
      }
      document.getElementById('uploadForm').submit() // 表单提交
      this.$http.get('/upload').then(
        response => {
          this.coverImg = response
          console.log(response, 'yy')
        })
      // if (this.$route.params.id) {
      //   // 更新文章
      //   let obj = {
      //     _id: this.$route.params.id,
      //     title: this.title,
      //     date: this.date,
      //     content: this.editorContent,
      //     coverImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555330499&di=976f17f85d03f8b5a4c3f539c55a2d19&imgtype=jpg&er=1&src=http%3A%2F%2Fhuafans.dbankcloud.com%2Fpic%2F2017%2F07%2F21%2Fc41a15c05434098ac3d596fc058841aa_IMG_20170721_124529.jpg%3Fmode%3Ddownload',
      //     gist: this.gist,
      //     labels: this.labels
      //   }
      //   this.$http.post('/api/admin/updateArticle', {
      //     articleInformation: obj
      //   }).then(
      //     response => {
      //       self.$message({
      //         message: '更新文章成功',
      //         type: 'success'
      //       })
      //       // 更新完成后跳转至该文章的详情页
      //       self.$router.push('/articleDetail/' + self.$route.params.id)
      //     },
      //     response => console.log(response)
      //   )
      // } else {
      //   // 新建文章
      //   // 获取时间
      //   this.getDate()
      //   let obj = {
      //     title: this.title,
      //     date: this.date,
      //     content: this.editorContent,
      //     coverImg: this.coverImg,
      //     gist: this.gist,
      //     labels: this.labels
      //   }
      //   this.$http.post(apiUrl + '/api/admin/saveArticle', {
      //     articleInformation: obj
      //   }).then(
      //     response => {
      //       self.$message({
      //         message: '发表文章成功',
      //         type: 'success'
      //       })
      //       // 保存成功后跳转至文章列表页
      //       self.refreshArticleList()
      //     },
      //     response => console.log(response)
      //   )
      // }
    },
    // 保存成功后跳转至文章列表页
    refreshArticleList () {
      this.$router.push({ name: 'articleList' })
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
  .edit_wrapper {
    padding: 40px 100px;
    font-size: 16px;
    h2 {
      text-align: center;
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
    textarea {
      outline: none;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .edit_head {
      margin: 10px 0;
      text-align: left;
      display: flex;
      .el-textarea {
        width: 500px;
        margin-right: 50px;
      }
      .cover-img {
        position: relative;
        margin-left: 20px;
        .el-icon-plus {
          border: 1px solid #dcdfe6;
          padding: 70px 120px;
        }
        form {
          input {
            cursor pointer
          }
        }
      }
    }
    #div3 {
      margin: 10px 0;
    }
    .markdown {
      text-align: left;
      border: 1px solid #bfcbd9;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      width: 100%;
      height: 800px;
      vertical-align: top;
      background: #f5f7f9;
      overflow: hidden;
    }

    .markdown textarea {
      border: none;
      resize: none;  /*不可拖动*/
    }

    .markdown_input {
      float: left;
      display: inline-block;
      width: 49%;
      height: 98%;
      background-color: white;
      padding-left: 1%;
      padding-top: 1%;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
    }
    .markdown_compiled {
      overflow: auto;
      float: right;
      display: inline-block;
      width: 49%;
      height: 100%;
      padding: 5px 0 5px 1%;
    }
    #div3 {
      position: relative;
      z-index: 0;
      .el-input {
        position: absolute;
        width: 98%;
        left: 0;
        padding: 0 10px;
        height: 99%;
        z-index: 1;
        .el-input__inner {
          border: none;
          height: 100%;
        }
      }
    }
    .save_button {
      padding: 40px 0;
    }
  }
</style>
