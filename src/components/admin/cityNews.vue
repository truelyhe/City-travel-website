<template>
  <div class="list-warpper">
    <sidebar/>
    <div class="list-warp">
      <el-button class="add-btn" @click="toAddNews">添加要闻</el-button>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>城市要闻</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="text item">
          <ul>
            <li v-for="(item, index) in newsList" :key="index">
              <span>{{item.title}}</span>
              <span>{{item.content}}</span>
              <span>图片</span>
              <span>标签</span>
              <span>{{item.date}}</span>
              <span>
                <a @click="articleEdit(item._id)">编辑</a>
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
      newsList: []
    }
  },
  mounted () {
    // 获取列表
    this.$http.get(apiUrl + '/api/newsList').then(
      response => {
        if (response.body) {
          this.newsList = response.body.reverse()
        }
      },
      response => console.log(response)
    )
  },
  methods: {
    toAddNews () {
      this.$router.push({
        name: 'newsAdd'
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
