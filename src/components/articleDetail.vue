<template>
  <div class="article_content_warp">
    <Header/>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }" class="index-word">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ article.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="article_wrap">
      <div class="article_title article_detail_title">{{ article.title }}</div>
      <div class="article_info">
        <span class="article_info_date">发表于：{{ article.date }}</span>
        <span class="article_info_label">
          <div v-if="article.labels.length">
            <el-tag class="tag_margin" type="primary" v-for="tag in article.labels" :key="tag">{{ tag }}</el-tag>
          </div>
          <span v-else>未分类</span>
        </span>
      </div>
      <img class="article_detail_img" src="http://pic1.win4000.com/wallpaper/6/57beb9d2bb240.jpg"/>
      <div class="article_detail_content" v-html="compiledMarkdown()"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/base/header'
import Footer from '@/base/footer'
import marked from 'marked'
import highlight from 'highlight.js'
import '../assets/atom-one-light.css'
import { apiUrl } from '@/api/config'

marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value
  }
})
export default {
  name: 'articleDetail',
  data () {
    return {
      article: {}
    }
  },
  activated () {
    let id = this.$route.params.id
    this.$http.get(apiUrl + '/api/articleDetail/' + id).then(
      response => { this.article = response.body },
      response => console.log(response)
    )
  },
  methods: {
    compiledMarkdown: function () {
      return marked(this.article.content || '', {sanitize: true})
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
        .el-breadcrumb__item__inner {
          color: #409eff;
          cursor: pointer
        }
      }
    }
    .article_wrap {
      width: 860px;
      margin: 30px auto 50px;
      background: #fff;
      text-align: center;
      .article_detail_title {
        cursor: default;
        padding: 10px 0;
        font-size: 22px;
      }
      .article_info {
        span {
          margin: 5px 0;
        }
      }
      .article_detail_img {
        width: 450px;
        margin: 20px 0;
      }
      .article_detail_content {
        text-align: left;
        padding: 30px 10px;
        font-size: 18px;
      }
    }
  }
</style>
