<template>
  <div class="article_content_warp">
    <Header/>
    <div class="article_wrap">
      <div class="article_title article_detail_title">{{ article.title }}</div>
      <div class="article_info">
        <span class="article_info_date">发表于：{{ article.date }}</span>
        <span class="article_info_label">标签：
          <div  v-if="article.labels.length">
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
  mounted: function () {
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
    background: white;
    margin: 0 auto;
    .article_wrap {
      text-align: center;
      .article_detail_title {
        cursor: default;
        margin: 40px 0 0;
      }
      .article_detail_img {
        width: 350px;
        margin: 20px 0;
      }
      .article_detail_content {
        text-align: left;
        padding: 60px 0;
        font-size: 18px;
      }
    }
  }
</style>
