<template>
  <div class="user-warpper">
    <sidebar/>
    <!-- <el-table
      :data="userList"
      style="width: 960px">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date || '2019-04-01' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
          <!-- <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <ul>
          <li>
            <span>用户名</span>
            <span></span>
            <span>日期</span>
            <span class="editBtn">
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </span>
          </li>
        </ul>
      </div>
      <div class="text item">
        <ul>
          <li v-for="(item, index) in userList" :key="index">
            <span>{{item.name}}</span>
            <div class="span">
              <i class="el-icon-time"></i>
              <span>{{item.date || '2019-05-01'}}</span>
            </div>
            <span class="edit-btn">
              <!-- <a @click="articleEdit(item._id)"></a> -->
              <a @click="handleDelete(item._id)">删除</a>
            </span>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
import sidebar from '@/base/sidebar.vue'
import { getApiRequest, postApiRequest } from '@/api/apiRequest'

export default {
  data () {
    return {
      userList: []
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    // 获取用户列表
    getUserList () {
      getApiRequest('/api/admin/getAllUser').then((res) => {
        this.userList = res.reverse()
      })
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (id) {
      let self = this
      this.$confirm('此操作将永久移除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const obj = {_id: id}
        postApiRequest('/api/admin/deleteUser', obj).then((res) => {
          self.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getUserList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },
  components: {
    sidebar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .user-warpper {
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
            span, .span {
              width: 26%;
              display: flex;
              align-items: center
              white-space: nowrap;
              text-overflow: ellipsis;
              padding: 0 5px;
              overflow: hidden;
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
