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
        <span :class="{active: switchIndex === 0}" @click="skipPageFn('index')">首页</span>
        <span :class="{active: switchIndex === 1}" @click="skipPageFn('impression')">印象济南</span>
        <span :class="{active: switchIndex === 2}" @click="skipPageFn('tourist')">景区景点</span>
        <span :class="{active: switchIndex === 3}" @click="skipPageFn('food')">餐饮美食</span>
        <span :class="{active: switchIndex === 4}" @click="skipPageFn('hotel')">住宿指南</span>
        <span :class="{active: switchIndex === 5}" @click="skipPageFn('magazine')">游客日志</span>
        <span :class="{active: switchIndex === 6}" @click="skipPageFn('message')">留言板</span>
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
  activated () {
    this.getUserInfo()
  },
  methods: {
    // 获取个人信息
    getUserInfo () {
      if (sessionStorage.getItem('userInfo')) {
        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      } else {
        this.userInfo = ''
      }
    },
    // 跳转页面
    skipPageFn (pageName) {
      this.$router.push({name: pageName})
    },
    // 跳转到登录页
    tologinPage () {
      this.$router.push({name: 'login'})
    },
    // 退出登录
    clearUser () {
      sessionStorage.clear()
      this.userInfo = ''
      if (this.switchIndex === 5) {
        window.location.reload()
      }
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
      width: 100%;
      align-items: center;
      .logo-title {
        display: flex;
        justify-content: center;
        padding: 20px 0;
        align-items: center;
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
        font-size: 18px;
        background: #fff;
        span {
          letter-spacing: 2px;
          padding: 5px 15px;
          color: #409EFF;
          cursor: pointer;
          margin: 0 10px;
        }
        span:hover {
           background: #409EFF;
           color: #fff;
        }
        .active {
          background: #409EFF;
          color: #fff;
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
