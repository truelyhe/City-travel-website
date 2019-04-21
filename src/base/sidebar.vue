<template>
  <div class="left_menu">
    <!-- <nav>
      <ul>
        <router-link to="/index">
          <li>
            <span>网站首页</span>
          </li>
        </router-link>
        <router-link to="/admin/news/cityNews">
          <li>
            <span>新闻管理</span>
          </li>
        </router-link>
        <router-link to="/admin/notice/noticeManage">
          <li>
            <span>公告管理</span>
          </li>
        </router-link>
        <router-link to="/admin/article/articleList">
          <li>
            <span>推荐列表</span>
          </li>
        </router-link>
        <router-link to="/admin/diary/diaryManage">
          <li>
            <span>日志管理</span>
          </li>
        </router-link>
         <router-link to="/about">
          <li>
            <span>关于</span>
          </li>
        </router-link>
      </ul>
    </nav> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
     >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页管理</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1" @click="toPageFn(0)">新闻管理</el-menu-item>
          <el-menu-item index="1-2" @click="toPageFn(1)">公告管理</el-menu-item>
          <el-menu-item index="1-3" @click="toPageFn(2)">推荐管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2" @click="toPageFn(3)">
        <i class="el-icon-menu"></i>
        <span slot="title" >日志管理</span>
      </el-menu-item>
      <el-menu-item index="3" @click="toPageFn(4)">
        <i class="el-icon-document"></i>
        <span slot="title">留言管理</span>
      </el-menu-item>
      <el-menu-item index="4" @click="toPageFn(5)">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <!-- <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item> -->
    </el-menu>
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
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 页面切换
    toPageFn (index) {
      if (index === 0) {
        this.$router.push({name: 'cityNews'})
      }
      if (index === 1) {
        this.$router.push({name: 'noticeManage'})
      }
      if (index === 2) {
        this.$router.push({name: 'articleList'})
      }
      if (index === 3) {
        this.$router.push({name: 'noticeManage'})
      }
      if (index === 4) {
        this.$router.push({name: 'cityNews'})
      }
      if (index === 5) {
        this.$router.push({name: 'userManage'})
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left_menu {
    text-align: center;
    margin-right: 15px;
    border: solid 1px #e6e6e6;
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
    .el-menu {
      border: none;
    }
  }
  @media (max-width: 767px) {
    .left_menu {
      display: none;
    }
  }
</style>
