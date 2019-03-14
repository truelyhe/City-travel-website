<template>
  <div class="sign_wrapper">
    <img src="@/assets/sign-in-bg.png"/>
    <div class="sign_wrap">
      <h1>后台管理</h1>
      <el-input v-model="name" placeholder="请输入用户名"></el-input>
      <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
      <div class="sign-btn">
        <el-button @click="signup">注册</el-button>
        <el-button type="primary" @click="signin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { apiUrl } from '@/api/config'

export default {
  name: 'signin',
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
    signup: function () {
      let _this = this
      if (this.name.length < 6) {
        this.$message.error('用户名不能为空或小于六个字符')
        return
      }

      if (this.password.length < 6) {
        this.$message.error('密码不能为空或小于六个字符')
        return
      }

      this.$http.get(apiUrl + '/api/admin/getUser/' + this.name).then(
        response => {
          if (response.body.name === _this.name) {
            _this.$message.error('该用户已存在')
            _this.name = ''
            // 由于异步，name的改变比正常流执行得慢，所以不能通过判断name去执行是否post
            // 所以我把post移入else中，而不是在外面通过判断name执行
          } else {
            let obj = {
              name: _this.name,
              password: _this.password
            }

            _this.$http.post(apiUrl + '/api/admin/signup', {
              userInfo: obj
            }).then(
              response => {
                _this.$message({
                  message: '注册成功',
                  type: 'success'
                })
              },
              response => console.log('注册失败' + response)
            )
          }
        },
        response => console.log(response)
      )
    },
    signin: function () {
      let _this = this
      if (this.name.length < 6) {
        this.$message.error('用户名不能为空或小于六个字符')
        return
      }

      if (this.password.length < 6) {
        this.$message.error('密码不能为空或小于六个字符')
        return
      }

      this.$http.get(apiUrl + '/api/admin/getUser/' + this.name).then(
        response => {
          if (_this.password !== response.body.password) {
            _this.$message.error('用户名或密码不正确')
          } else {
            let obj = {
              name: _this.name,
              password: _this.password
            }
            _this.$http.post(apiUrl + '/api/admin/signin', {
              userInfo: obj
            }).then(
              response => {
                _this.$message({
                  message: '登录成功',
                  type: 'success'
                })
                delete _this.password
                // _this.$router.go(-1)
                this.$router.push('/admin/articleList/')
              },
              response => console.log('登录失败' + response)
            )
          }
        },
        response => {
          _this.$message.error('该用户不存在')
          return false
        }
      )
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
      width: 300px;
      margin: 200px auto;
      h1 {
        color: #383a42;
        padding: 10px;
      }
      .el-input, .sign-btn {
        padding-top: 20px;
      }
    }
  }
</style>
