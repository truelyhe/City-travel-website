<template>
  <div class="list-warpper">
    <sidebar/>
    <div class="list-warp">
      <!-- <el-button class="add-btn" @click="articleEdit()">编写日志</el-button> -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!-- <span>推荐列表</span> -->
          <ul>
            <li>
              <span>标题</span>
              <span>内容</span>
              <span>图片</span>
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
            <li v-for="(item, index) in diaryList" :key="index">
              <span>{{item.title}}</span>
              <span v-html="item.content">{{item.content}}</span>
              <span><img v-if="item.images.length" :src='item.images[0]'/></span>
              <span v-if="item.labels && item.labels.length === 0">未分类</span>
              <span v-else>
                <el-tag class="tag_margin" type="primary" v-for="tag in item.labels" :key="tag">{{ tag }}</el-tag>
              </span>
              <span>{{item.date}}</span>
              <span>
                <a @click="articleEdit(item._id)"></a>
                <a @click="deleteArticle(item._id)">删除</a>
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
      diaryList: [] // 日志列表
    }
  },
  mounted: function () {
    // 获取日志列表
    this.getDiaryList()
  },
  methods: {
    // 获取日志列表
    getDiaryList () {
      this.$http.get(apiUrl + '/api/diaryList').then(
        response => { this.diaryList = response.body.reverse() },
        response => console.log(response)
      )
    },
    // 删除日志
    deleteArticle: function (id) {
      let self = this
      this.$confirm('此操作将永久删除该日志, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        self.$http.post(apiUrl + '/api/admin/deleteDiary', {
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
      this.$http.get(apiUrl + '/api/diaryList').then(
        response => { this.diaryList = response.body.reverse() },
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
          padding: 0;
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
          padding: 0;
          li {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            align-items: center
            span {
              width: 26%;
              display: flex;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding: 0 5px;
              overflow: hidden;
              p {
                margin: 0;
              }
              span {
                width: 90%;
              }
              img {
                width: 50px;
                height: 50px;
                object-fit: cover;
              }
              a {
                width: 50%;
                text-align: right;
                cursor: pointer;
              }
              a:hover {
                color: #409eff;
              }
            }
          }
        }
      }
    }
  }
</style>
