<template>
  <div class="left_menu">
    <div class="menu_name">
      <div class="logo-title">
        <img src="../assets/head.jpg"/>
        <span class="title">济南旅游网</span>
      </div>
      <div class="nav-tab">
        <span :class="{active: switchIndex === 0 ? true : false}" @click="toIndex()">首页</span>
        <span :class="{active: switchIndex === 1 ? true : false}" @click="toImpressionPage()">印象济南</span>
        <span :class="{active: switchIndex === 2 ? true : false}" @click="toTouristPage()">景区景点</span>
        <span :class="{active: switchIndex === 3 ? true : false}" @click="toFoodPage()">餐饮美食</span>
        <span :class="{active: switchIndex === 4 ? true : false}"  @click="toQuarterPage()">住宿指南</span>
        <span :class="{active: switchIndex === 5 ? true : false}" @click="toMagazinePage()">游客日志</span>
        <span :class="{active: switchIndex === 6 ? true : false}">留言板</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switchIndex: 0
    }
  },
  methods: {
    // 跳转到首页
    toIndex () {
      this.$router.push({name: 'index'})
      this.switchIndex = 0
    },
    // 跳转到印象济南页面
    toImpressionPage () {
      this.$router.push({name: 'impression'})
      this.switchIndex = 1
    },
    // 跳转到景区景点页面
    toTouristPage () {
      this.switchIndex = 2
      this.$router.push({name: 'tourist'})
    },
    // 跳转到餐饮美食页面
    toFoodPage () {
      this.switchIndex = 3
      this.$router.push({name: 'food'})
    },
    // 跳转到住宿指南页面
    toQuarterPage () {
      this.switchIndex = 4
    },
    // 跳转到游客日志页面
    toMagazinePage () {
      this.switchIndex = 5
      this.$router.push({name: 'magazine'})
    },
    // 跳转到登录页
    tologinPage () {
      this.$router.push('/admin/signin')
    }
  }
  // props: {
  //   switchIndex: 0
  // }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left_menu {
    text-align: center;
    .menu_name {
      background: #409EFF;
      color: #fff;
      padding: 20px 0 10px;
      width: 100%;
      align-items: center;
      .logo-title {
        display: flex;
        justify-content: center;
        .title {
          font-size: 20px;
          text-align: right;
          line-height: 40px;
          letter-spacing: 2px;
        }
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
      }
      .nav-tab {
        display: flex;
        justify-content: center;
        padding-top: 10px;
        font-size: 14px;
        span {
          letter-spacing: 2px;
          padding: 0 15px;
          color: #fff;
          cursor: pointer;
        }
        span:hover {
          color: #000;
        }
        .active {
            background: #fff;
            color: #409eff;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .left_menu {
      display: none;
    }
  }

  nav {
    background: white;
    padding: 20px 0;
  }

  .nav {
    padding: 8px 20px;
    text-align: left;
  }

  .info {
    margin-top: 10px;
    padding: 20px;
    background: white;
  }

  .info_name {
    font-weight: 600;
    padding: 5px;
  }

  .info img {
    width: 120px;
    height: 120px;
  }

  .archive {
    padding-top: 20px;
  }

  .archive .archive_count {
    display: block;
    color: #222;
    font-weight: 600;
    font-size: 16px;
  }

  .archive .archive_name {
    display: block;
    color: #999;
    font-size: 14px;
  }

  .communication {
    padding-top: 20px;
  }

  .communication_item {
    display: inline-block;
    width: 40%;
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
  }
</style>
