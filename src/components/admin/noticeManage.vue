<template>
  <div class="list-warpper">
    <sidebar/>
    <div class="list-warp">
      <el-button class="add-btn" @click="toAddNotice">添加公告</el-button>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>通知公告</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="text item">
          <ul>
            <li v-for="(item, index) in noticeList" :key="index">
              <span>{{item.title}}</span>
              <span>{{item.content}}</span>
              <span>图片</span>
              <span>标签</span>
              <span>{{item.date}}</span>
              <span>
                <a @click="noticeEdit(item._id)">编辑</a>
                <a @click="deleteNoticeFn(item._id)">删除</a>
              </span>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import sidebar from '@/base/sidebar.vue'
import { apiUrl } from '@/api/config'

export default {
  data () {
    return {
      noticeList: []
    }
  },
  mounted () {
    this.getNoticeList()
  },
  methods: {
    // 获取新闻列表
    getNoticeList () {
      this.$http.get(apiUrl + '/api/noticeList').then(
        response => {
          if (response.body) {
            this.noticeList = response.body.reverse()
          }
        },
        response => console.log(response)
      )
    },
    // 添加新闻
    toAddNotice () {
      let query = {fromNew: false}
      this.$router.push({
        name: 'newsAdd',
        query: query
      })
    },
    newEdit () {},
    // 删除新闻
    deleteNoticeFn (id) {
      let self = this
      this.$confirm('此操作将永久删除该通知, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        self.$http.post(apiUrl + '/api/admin/deleteNotice', {
          _id: id
        }).then(
          response => {
            self.$message({
              type: 'success',
              message: '删除成功!'
            })
            self.getNewsList()
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
    .list-warp {
      display: flex;
      flex-direction: column;
      .add-btn {
        width: 105px;
        margin-bottom: 5px;
      }
    }
    .box-card {
      width: 960px;
      .clearfix:before,
      .clearfix:after {
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
