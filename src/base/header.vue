<template>
  <div class="left_menu">
    <div class="menu_name">
      <div class="logo-title">
        <img src="../assets/trip.png"/>
        <span class="title">济南旅游网</span>
      </div>
      <div class="nav-tab">
        <span :class="{active: switchIndex === 0}" @click="toIndex()">首页</span>
        <span :class="{active: switchIndex === 1}" @click="toImpressionPage()">印象济南</span>
        <span :class="{active: switchIndex === 2}" @click="toTouristPage()">景区景点</span>
        <span :class="{active: switchIndex === 3}" @click="toFoodPage()">餐饮美食</span>
        <span :class="{active: switchIndex === 4}"  @click="toQuarterPage()">住宿指南</span>
        <span :class="{active: switchIndex === 5}" @click="toMagazinePage()">游客日志</span>
        <span :class="{active: switchIndex === 6}" @click="toMessagePage()">留言板</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    switchIndex: Number
  },
  methods: {
    // 跳转到首页
    toIndex () {
      this.$router.push({name: 'index'})
    },
    // 跳转到印象济南页面
    toImpressionPage () {
      this.$router.push({name: 'impression'})
    },
    // 跳转到景区景点页面
    toTouristPage () {
      this.$router.push({name: 'tourist'})
    },
    // 跳转到餐饮美食页面
    toFoodPage () {
      this.$router.push({name: 'food'})
    },
    // 跳转到住宿指南页面
    toQuarterPage () {
      this.$router.push({name: 'hotel'})
    },
    // 跳转到游客日志页面
    toMagazinePage () {
      this.$router.push({name: 'magazine'})
    },
    // 跳转到留言板页面
    toMessagePage () {
      this.$router.push({name: 'message'})
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
</style>
