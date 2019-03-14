<template>
  <div class="list-warpper">
    <sidebar/>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>城市要闻</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <!-- <div class="text item">
        <ul>
          <li v-for="(item, index) in articleList" :key="index">
            <span>{{item.title}}</span>
            <span>{{item.content}}</span>
            <span><img src=''/></span>
            <span v-if="item.labels.length === 0">未分类</span>
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
      </div> -->
    </el-card>
  </div>
</template>

<script>
import sidebar from '@/base/sidebar.vue'

export default {
  data () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
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
