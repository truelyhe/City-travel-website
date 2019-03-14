<template>
  <div class="left_menu">
    <nav>
      <ul>
        <router-link to="/index">
          <li>
            <span>网站首页</span>
          </li>
        </router-link>
        <router-link to="/admin/cityNews">
          <li>
            <span>要闻编辑</span>
          </li>
        </router-link>
        <router-link to="/admin/noticeManage">
          <li>
            <span>公告管理</span>
          </li>
        </router-link>
        <router-link to="/admin/articleList">
          <li>
            <span>推荐列表</span>
          </li>
        </router-link>
        <router-link to="/admin/articleEdit">
          <li>
            <span>写文章</span>
          </li>
        </router-link>
         <router-link to="/about">
          <li>
            <span>关于</span>
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      articleNumber: ''
    }
  },
  mounted: function () {
    // this.$http.get('/api/articleList').then(
    //   response => { this.articleNumber = response.body.length },
    //   response => console.log(response)
    // )
  },
  methods: {
    toIndex () {
      this.$router.push('/article')
    },
    tologinPage () {
      this.$router.push('/admin/signin')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left_menu {
    text-align: center;
    background: #409EFF;
    margin-right: 15px;
    nav {
      background: #409EFF;
      padding: 20px 0;
      ul {
        list-style: none;
        a {
          text-decoration: none
        }
        li {
          padding: 15px 20px;
          text-align: left;
          color: #fff;
        }
        li:hover {
          background: #fff;
          color: #409EFF;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .left_menu {
      display: none;
    }
  }
</style>
