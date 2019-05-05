<template>
  <div class="sign_wrapper">
    <img src="@/assets/login-bg.jpg"/>
    <div class="sign_wrap">
      <h1 v-if="!isRegister">用户登录</h1>
      <h1 v-if="isRegister">用户注册</h1>
      <div class="sign-content">
        <el-input v-model="name" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
        <el-input v-model="password2" v-if="isRegister" placeholder="确认密码" type="password"></el-input>
        <div class="avatar-warp" v-if="isRegister">
          选择头像 :
          <el-radio-group v-model="selectAvatar">
            <el-radio :label="1"><img src="@/assets/avatar/none.jpg"/></el-radio>
            <el-radio :label="2"><img src="@/assets/avatar/boy.jpeg"/></el-radio>
            <el-radio :label="3"><img src="@/assets/avatar/girl.jpeg"/></el-radio>
          </el-radio-group>
        </div>
        <div class="sign-btn" v-if="!isRegister">
          <el-button @click="toRegister">注册</el-button>
          <el-button type="primary" @click="signin">登录</el-button>
        </div>
        <div class="sign-btn" v-if="isRegister">
          <el-button @click="goBackFn">返回</el-button>
          <el-button type="primary" @click="registerFn">确定</el-button>
        </div>
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
      isRegister: false,
      name: '', // 用户名
      password: '', // 密码
      password2: '', // 确认密码
      selectAvatar: 1,
      hasName: false // 用户名被占
    }
  },
  mounted: function () {
  },
  methods: {
    // 跳转注册
    toRegister () {
      this.isRegister = true
      this.name = ''
      this.password = ''
    },
    goBackFn () {
      this.isRegister = false
    },
    // 注册
    registerFn () {
      let _this = this
      if (this.name.length < 6) {
        this.$message.error('用户名不能为空或小于六个字符')
        return
      }
      if (this.password.length < 6) {
        this.$message.error('密码不能为空或小于六个字符')
        return
      }
      if (this.password !== this.password2) {
        this.$message.error('两次密码输入不一致')
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
              password: _this.password,
              avatarCount: this.selectAvatar
              // avatar: this.selectAvatar === 1 ? '@/assets/avatar/none.jpg' : this.selectAvatar === 2 ? '@/assets/avatar/boy.jpeg' : '@/assets/avatar/girl.jpeg'
            }
            console.log(obj)
            _this.$http.post(apiUrl + '/api/admin/signup', {
              userInfo: obj
            }).then(
              response => {
                _this.$message({
                  message: '注册成功',
                  type: 'success'
                })
                setTimeout(() => {
                  _this.isRegister = false
                }, 3000)
              },
              response => console.log('注册失败' + response)
            )
          }
        },
        response => console.log(response)
      )
    },
    // 登录
    signin: function () {
      let _this = this
      console.log(this.password.length, 'p')
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
              password: _this.password,
              avatarCount: response.body.avatarCount
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
                sessionStorage.setItem('userInfo', JSON.stringify(obj))
                this.$router.push({
                  path: '/'
                })
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
      top: 0;
      z-index: -1;
    }
    .sign_wrap {
      width: 320px;
      margin: 200px auto;
      border-radius: 8px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
          .submit-btn {
            width: 120px;
          }
        }
        .avatar-warp {
          padding: 20px 0;
          .el-radio-group {
            padding-top:12px;
            .el-radio {
              padding-right: 25px;
              img {
                width: 35px;
                height: 35px;
              }
            }
          }
        }
      }
    }
  }
</style>
