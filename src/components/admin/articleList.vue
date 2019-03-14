<template>
  <div class="list-warpper">
    <sidebar/>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- <span>推荐列表</span> -->
        <ul>
          <li>
            <span>标题</span>
            <span>内容</span>
            <span><img src=''/></span>
            <span>标签</span>
            <span>时间</span>
            <span class="editBtn">
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </span>
          </li>
        </ul>
      </div>
      <div class="text item">
        <ul>
          <li v-for="(item, index) in articleList" :key="index">
            <span>{{item.title}}</span>
            <span>{{item.content}}</span>
            <span><img src=''/></span>
            <span v-if="item.labels && item.labels.length === 0">未分类</span>
            <span v-else>
              <el-tag class="tag_margin" type="primary" v-for="tag in item.labels" :key="tag">{{ tag }}</el-tag>
            </span>
            <span>{{item.date}}</span>
            <span>
              <a @click="articleEdit(item._id)">编辑</a>
              <a @click="deleteArticle(item._id)">删除</a>
            </span>
          </li>
        </ul>
      </div>
    </el-card>
    <!-- <div class="article_wrap" v-for="(item, index) in articleList" :key="index">
      <div @click="articleEdit(item._id)" class="article_title">{{ item.title }}</div>
      <div class="article_info">
        <span class="article_info_date">发表于：{{ item.date }}</span>
        <span class="article_info_label">标签：
        <span v-if="item.labels.length === 0">未分类</span>
        <el-tag v-else class="tag_margin" type="primary" v-for="tag in item.labels" :key="tag">{{ tag }}</el-tag>
        </span>
      </div>
      <div class="article_gist">{{ item.gist }}</div>
      <div>
        <div @click="articleEdit(item._id)" class="article_button edit">修改</div>
        <div @click="deleteArticle(item._id)" class="article_button delete">删除</div>
      </div>
      <div class="article_underline"></div>
    </div> -->
  </div>
</template>

<script>
import sidebar from '@/base/sidebar.vue'
import { apiUrl } from '@/api/config'

export default {
  name: 'article',
  data () {
    return {
      articleList: []
    }
  },
  mounted: function () {
    // 获取文章列表
    this.$http.get(apiUrl + '/api/articleList').then(
      response => { this.articleList = response.body.reverse() },
      response => console.log(response)
    )
  },
  methods: {
    // 跳转至文章编辑页
    articleEdit: function (id) {
      this.$router.push('/admin/articleEdit/' + id)
    },
    // 删除文章
    deleteArticle: function (id) {
      let self = this
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        self.$http.post(apiUrl + '/api/admin/deleteArticle', {
          _id: id
        }).then(
          response => {
            self.$message({
              type: 'success',
              message: '删除成功!'
            })
            self.fetchData()
          },
          response => {
            console.log(response)
          }
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 更新数据
    fetchData: function () {
      this.$http.get(apiUrl + '/api/articleList').then(
        response => { this.articleList = response.body.reverse() },
        response => console.log(response)
      )
    }
  },
  components: {
    sidebar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main {
    text-align: left;
  }
  .list-warpper {
    position: fixed;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    width: 100%;
    margin: 50px 0;
    justify-content: center;
    .box-card {
      width: 960px;
      .clearfix {
        ul {
          li {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            span {
              width: 26%;
              display: flex;
            }
            .editBtn {
              text-align: right;
              display: block;
            }
          }
        }
      }
      .clearfix:before, .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both
      }
      .text {
        font-size: 14px;
      }
      .item {
        margin-bottom: 18px;
         ul {
          display: block;
          li {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            span {
              width: 26%;
              display: flex;
              a {
                width: 50%;
                text-align: right;
                cursor: pointer;
              }
              .edit:hover {
                background: limegreen;
                color: white;
                font-weight: 600;
              }
              .delete:hover {
                background: red;
                color: white;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
</style>
