<template>
  <div>
    <div class="edit_wrap">
      <div class="return_button">
        <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
      </div>
      <div class="edit_head">标题</div>
      <el-input v-model="title" placeholder="请输入标题"></el-input>
      <div class="edit_head">内容</div>
      <div class="markdown">
        <textarea class="markdown_input" v-model="content" @input="update"></textarea>
        <div class="clear"></div>
      </div>
      <div class="save_button">
        <el-button type="primary" @click="saveArticle">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import '../../assets/atom-one-light.css'
import { apiUrl } from '@/api/config'

export default {
  name: 'articleEdit',
  data () {
    return {
      title: '',
      date: '',
      content: '',
      inputVisible: false,
      inputValue: ''
    }
  },
  mounted: function () {
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
    // 延时赋值给content
    update: _.debounce(function (e) {
      this.content = e.target.value
    }, 300),
    // 获取发表时间
    getDate: function () {
      let mydate, y, m, d, hh, mm, ss
      mydate = new Date()
      y = mydate.getFullYear()
      m = mydate.getMonth() + 1 // 1月是0
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
    // 保存文章
    saveArticle: function () {
      let self = this
      if (this.title.length === 0) {
        this.$notify({
          title: '提醒',
          message: '请输入标题',
          type: 'warning'
        })
        return
      }
      if (this.content.length === 0) {
        this.$notify({
          title: '提醒',
          message: '请输入内容',
          type: 'warning'
        })
        return
      }
      if (this.$route.params.id) {
        // 更新文章
        let obj = {
          _id: this.$route.params.id,
          title: this.title,
          date: this.date,
          content: this.content,
          gist: this.gist,
          labels: this.labels
        }
        this.$http.post('/api/admin/updateArticle', {
          articleInformation: obj
        }).then(
          response => {
            self.$message({
              message: '更新文章成功',
              type: 'success'
            })
            // 更新完成后跳转至该文章的详情页
            self.$router.push('/articleDetail/' + self.$route.params.id)
          },
          response => console.log(response)
        )
      } else {
        // 新建文章
        // 获取时间
        this.getDate()
        let obj = {
          title: this.title,
          date: this.date,
          content: this.content
        }
        const url = this.$route.query.fromNew ? '/api/admin/saveNews' : '/api/admin/saveNotice'
        this.$http.post(apiUrl + url, {
          newsInformation: obj
        }).then(
          response => {
            self.$message({
              message: this.$route.query.fromNew ? '新闻发布成功' : '通知发布成功',
              type: 'success'
            })
            // 保存成功后跳转至新闻列表页
            self.refreshList(this.$route.query.fromNew)
          },
          response => console.log(response)
        )
      }
    },
    // 保存成功后跳转至新闻列表页
    refreshList (state) {
      if (state) {
        this.$router.push('/admin/cityNews')
      } else {
        this.$router.push('/admin/noticeManage')
      }
    },
    goBack: function () {
      this.$router.go(-1)
    },
    // element标签组件
    handleClose: function (tag) {
      this.labels.splice(this.labels.indexOf(tag), 1)
    },
    showInput: function () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm: function () {
      let inputValue = this.inputValue
      if (inputValue) this.labels.push(inputValue)
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style>
  .edit_wrap {
    padding: 40px;
    font-size: 16px;
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

  .save_button {
    padding: 40px 0;
  }
</style>
