<template>
  <div class="more-content">
    <Header/>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }" class="index-word">首页</el-breadcrumb-item>
      <el-breadcrumb-item>浏览更多</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="hotel-warpper">
      <ul v-if="page === 1">
        <li v-for="(item,index) in moreList" :key="index">
          <div class="list-item" @click="articleDetail(0, item._id)">
            <img v-if="mark === 0" src="http://119.164.252.163:88/images/0531/05310b7d474a-e4f3-4f2e-a25a-842a4893284a/S20190408094048.jpg"/>
            <img v-if="mark === 1" src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1554710195&di=3456b8d741e2955538c673326619aab0&src=http://m.tuniucdn.com/fb2/t1/G1/M00/CF/FC/Cii9EVao2fWIZ-BzAGXI-DOGQXsAABp6QEtX8gAZckQ528_w700_h0_c0_t0.jpg"/>
            <img v-if="item.coverImg" :src="item.coverImg"/>
            <!-- <img :src="item.pic"/> -->
            <div class="describe">
              <span class="title">{{item.title}}</span>
              <span class="address">{{item.date}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="10">
      </el-pagination>
    </div>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
import { apiUrl } from '@/api/config'

export default {
  name: 'impression',
  data () {
    return {
      page: 1,
      mark: 0,
      moreList: []
    }
  },
  activated () {
    this.mark = this.$route.query.mark
    if (this.mark === 0) {
      this.getNewsListFn()
    } else if (this.mark === 1) {
      this.getNoticeListFn()
    } else {
      this.getArticleListFn()
    }
  },
  methods: {
    // 获取新闻列表
    getNewsListFn () {
      this.$http.get(apiUrl + '/api/newsList').then(
        response => { this.moreList = response.body.reverse() }
      )
    },
    // 获取通知列表
    getNoticeListFn () {
      this.$http.get(apiUrl + '/api/noticeList').then(
        response => { this.moreList = response.body.reverse() }
      )
    },
    // 获取推荐列表
    getArticleListFn () {
      this.$http.get(apiUrl + '/api/articleList').then(
        response => { this.moreList = response.body.reverse() }
      )
    },
    // 跳转详情
    articleDetail (state, id) {
      let params = {
        id: id,
        state: state
      }
      this.$router.push({
        name: 'articleDetail',
        params: params
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      if (val === 1) {
        this.page = 1
      } else {
        this.page = 2
      }
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .more-content {
    background-color:#f1f1f1;
    .el-breadcrumb {
      margin: 30px 100px 0;
      font-size: 18px;
      .index-word {
        .el-breadcrumb__item__inner {
          color: #409eff;
          cursor: pointer
        }
      }
    }
    .hotel-warpper{
      padding:0 130px;
      ul{
        width: 1240px;
        li{
          display: inline-table;
          width: 570px;
          list-style:none;
          background-color:#fff;
          margin: 10px;
          padding: 10px 15px;
          .list-item {
            display: flex;
            cursor: pointer
            img{
              width:170px;
              height:120px;
            }
            .describe{
              display:flex;
              flex-direction:column;
              padding-left: 25px;
              span{
                  padding-bottom:9px;
              }
              .title{
                  font-size:20px;
              }
              .address{
                color: #9b9b9b;
              }
            }
          }
        }
      }
    }
    .block{
      text-align:center;
      padding:10px 0;
      .el-pagination{
        ul{
          li{
            font-size:16px;
          }
        }
      }
    }
  }
</style>
