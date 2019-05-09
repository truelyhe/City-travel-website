<template>
  <div class="article_content_warp">
    <Header/>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="index-word"><span @click="goBack()">返回</span></el-breadcrumb-item>
      <el-breadcrumb-item>{{ article.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="article_wrap">
      <div class="article_title article_detail_title">{{ article.title }}</div>
      <div class="article_info">
        <span class="article_info_date">发表于：{{ article.date }}</span>
        <span class="article_info_label" v-if="article.labels">
          <div v-if="article.labels && article.labels.length">
            <el-tag class="tag_margin" type="primary" v-for="tag in article.labels" :key="tag">{{ tag }}</el-tag>
          </div>
          <span v-else>未分类</span>
        </span>
      </div>
      <img class="article_detail_img" v-if="article.coverImg" :src="article.coverImg"/>
      <div class="article_detail_content" v-html="article.content">{{article.content}}</div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/base/header'
import Footer from '@/base/footer'
// import '@/assets/atom-one-light.css''
import { apiUrl } from '@/api/config'

export default {
  data () {
    return {
      article: {}
    }
  },
  created () {
  },
  activated () {
    let id = this.$route.params.id
    let state = this.$route.params.state
    console.log(state === '1')
    let behindUrl = state === '0' ? '/api/newDetail/' : state === '1' ? '/api/noticeDetail/' : '/api/articleDetail/'
    this.getDetailFn(id, behindUrl)
  },
  methods: {
    // 获取详情内容
    getDetailFn (id, behindUrl) {
      this.$http.get(apiUrl + behindUrl + id).then(
        response => { this.article = response.body },
        response => console.log(response)
      )
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article_content_warp {
    width: 100%;
    background-color:#f1f1f1;
    margin: 0 auto;
    .el-breadcrumb {
      margin: 30px 100px 0;
      font-size: 18px;
      .index-word {
        .el-breadcrumb__inner {
          color: #409eff;
          cursor: pointer
        }
      }
    }
    .article_wrap {
      width: 960px;
      margin: 30px auto 50px;
      background: #fff;
      text-align: center;
      min-height: 482px;
      .article_detail_title {
        cursor: default;
        padding: 20px 0 10px;
        font-size: 22px;
      }
      .article_info {
        span {
          margin: 5px 2px;
          color: #9b9b9b;
          font-size: 14px;
        }
      }
      .article_detail_img {
        width: 450px;
        margin: 20px 0;
      }
      .article_detail_content {
        text-align: left;
        padding: 30px 20px;
        font-size: 16px;
        white-space: pre-wrap;
        letter-spacing: 2px;
        text-indent: 2rem;
        p {
          text-align: center;
        }
      }
    }
  }
</style>
