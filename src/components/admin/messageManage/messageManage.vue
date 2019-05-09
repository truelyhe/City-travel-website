<template>
  <div class="notice-list-warpper">
    <sidebar/>
    <div class="list-warp">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户留言</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="text item">
          <ul>
            <li v-for="(item, index) in messageList" :key="index">
              <span>{{item.user.username}}</span>
              <span>{{item.content}}</span>
              <span style="width: 160px">{{item.date}}</span>
              <span class="edit-btn">
                <!-- <a @click="newEdit(item._id)">编辑</a> -->
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
import { getApiRequest } from '@/api/apiRequest'

export default {
  data () {
    return {
      messageList: []
    }
  },
  mounted () {
    this.getMessageList()
  },
  methods: {
    // 获取留言列表
    getMessageList () {
      getApiRequest('/api/messageList').then((res) => {
        this.messageList = res.reverse()
      })
    },
    newEdit () {},
    // 删除留言
    deleteNoticeFn (id) {
      let self = this
      this.$confirm('此操作将永久删除该通知, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        self.$http.post(apiUrl + '/api/admin/deleteMessage', {
          _id: id
        }).then(
          response => {
            self.$message({
              type: 'success',
              message: '删除成功!'
            })
            self.getMessageList()
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
  .notice-list-warpper {
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
          padding: 0;
          li {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            span {
              width: 300px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              word-break: break-all;
              padding: 0 5px;
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
            .edit-btn {
              text-align: right;
              width: 60px;
              a {
                cursor: pointer;
                color: #FFF;
                background-color: #F56C6C;
                border-color: #F56C6C;
                padding: 7px 15px;
                border-radius: 3px;
              }
              a:hover {
                color: #eaeaea;
              }
            }
          }
        }
      }
    }
  }
</style>
