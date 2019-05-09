<template>
  <div class="sign_wrapper">
    <img src="@/assets/sign-in-bg.png"/>
    <div class="sign_wrap">
      <h1>后台管理</h1>
      <div class="sign-content">
        <el-input v-model="name" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
        <div class="sign-btn">
          <!-- <el-button @click="signup">注册</el-button> -->
          <el-button type="primary" @click="signin">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getApiRequest, ERR_OK } from '@/api/apiRequest'

export default {
  data () {
    return {
      name: '',
      password: '',
      hasName: false // 用户名被占
    }
  },
  mounted: function () {

  },
  methods: {
    signup () {
    },
    signin () {
      let _this = this
      if (!this.name || !this.password) {
        this.$message.error('请输入登录账号和密码！')
        return false
      }
      getApiRequest('/api/admin/managerLogin?account=' + this.name + '&password=' + this.password).then((res) => {
        if (res.errno === ERR_OK) {
          _this.$message({
            message: '登录成功',
            type: 'success'
          })
          delete _this.password
          this.$router.push({name: 'articleList'})
        } else if (res.errno === 401) {
          _this.$message.error('登录失败,账号密码有误！')
        } else {
          _this.$message.error('服务器出错！')
        }
      })
    },
    // 弹窗提示
    showModel (text, type) {
      this.$message({
        message: text,
        type: type
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sign_wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    img {
      position: absolute;
      width: 100%;
      top: 100px;
      z-index: -1;
    }
    .sign_wrap {
      width: 320px;
      margin: 200px auto;
      h1 {
        color: #fff;
        padding: 10px;
        text-align: center;
        background: #409eff;
        letter-spacing: 3px;
        margin: 0;
      }
      .sign-content {
        padding: 25px;
        .el-input, .sign-btn {
          padding-top: 20px;
          text-align: center;
          .el-button--primary {
            width: 100px;
          }
        }
      }
    }
  }
</style>
