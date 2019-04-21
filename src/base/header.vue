<template>
  <div class="left_menu">
    <div class="menu_name">
      <div class="logo-title">
        <img src="../assets/trip.png"/>
        <span class="title">济南旅游网</span>
        <div class="login-text">
          <span @click="tologinPage" v-if="!userInfo">注册 / 登录</span>
          <div v-else>
            <!-- <img v-if="userInfo.avatarCount === 1" src="@/assets/avatar/none.jpg"/>
            <img v-if="userInfo.avatarCount === 2" src="@/assets/avatar/boy.jpeg"/>
            <img v-if="userInfo.avatarCount === 3" src="@/assets/avatar/girl.jpeg"/>
            <p v-if="userInfo">{{userInfo.name}}</p> -->
            <span>欢迎您 {{userInfo.name}}</span>
            <span @click="clearUser">退出登录</span>
          </div>
        </div>
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
  data () {
    return {
      userInfo: ''
    }
  },
  created () {
    console.log(JSON.parse(sessionStorage.getItem('userInfo')), '999')
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
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
      this.$router.push({name: 'login'})
    },
    // 退出登录
    clearUser () {
      sessionStorage.clear()
      this.userInfo = ''
    }
  },
  props: {
    switchIndex: Number
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left_menu {
    text-align: center;
    position: relative
    .menu_name {
      background: #409EFF;
      color: #fff;
      padding-top: 20px;
      width: 100%;
      align-items: center;
      .logo-title {
        display: flex;
        justify-content: center;
        .title {
          font-size: 22px;
          text-align: right;
          line-height: 40px;
          letter-spacing: 6px;
        }
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        .login-text {
          position: absolute;
          right: 20px;
          span {
            font-size: 18px;
            cursor pointer
          }
        }
      }
      .nav-tab {
        display: flex;
        justify-content: center;
        padding-top: 15px;
        font-size: 18px;
        span {
          letter-spacing: 2px;
          padding: 5px 15px;
          color: #fff;
          cursor: pointer;
          margin: 0 10px;
        }
        span:hover {
           background: #fff;
           color: #409EFF;
        }
        .active {
          background: #3c97f5b3;
          color: #fff;
          border-bottom: 3px solid #fff;
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
