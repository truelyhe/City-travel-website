<template>
  <div class="message-content">
    <Header :switchIndex="6"/>
    <div class="Promotional-language">
      <h1>留言板</h1>
    </div>
    <div @click="lowHeightFn()">
      <div class="message-warp" @click.stop>
        <div>
          <el-input type="textarea" placeholder="留下些什么吧~~" v-model="inputValue" :rows="inputHeight ? 5 : 2" @focus="changeInputFn()"></el-input>
        </div>
        <div class="pub-btn">
          <el-button type="primary" v-if="inputHeight" @click="pubMessageFn()">发布</el-button>
        </div>
        <div class="hotel-warpper">
          <ul>
            <li  v-for="(item, index) in messageList" :key="index">
              <img v-if="item.user.usercount === 1" src="@/assets/avatar/none.jpg"/>
              <img v-if="item.user.usercount === 2" src="@/assets/avatar/boy.jpeg"/>
              <img v-if="item.user.usercount === 3" src="@/assets/avatar/girl.jpeg"/>
              <div class="describe">
              <span class="title">{{item.user.username}}</span>
                <!-- <span class="address">美食</span> -->
                <span class="price">{{item.content}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="messageList.length">
      </el-pagination>
    </div>
    <Footer/>
    <!-- <el-button :plain="true">{{tipValue}}</el-button> -->
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
import { getApiRequest, postApiRequest } from '@/api/apiRequest'
import { setTimeout } from 'timers'

export default {
  data () {
    return {
      inputHeight: false,
      inputValue: '', // 输入内容
      messageList: [] // 留言列表
      // tipValue: '' // 消息提示文字
    }
  },
  created () {
    this.getMessageList()
  },
  methods: {
    // 改变输入框高度
    changeInputFn () {
      this.inputHeight = true
    },
    lowHeightFn () {
      this.inputHeight = false
    },
    // 获取留言列表
    getMessageList () {
      getApiRequest('/api/messageList').then((res) => {
        this.messageList = res.reverse()
        console.log(this.messageList[0].user.usercount)
      })
    },
    // 发布留言
    pubMessageFn () {
      const that = this
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      if (!this.userInfo) {
        that.openModel('需要先登录才能发布留言喔!', 'warning')
        return false
      }
      if (!this.inputValue) {
        that.openModel('请输入内容!', 'warning')
        return false
      }
      let obj = {
        content: this.inputValue,
        user: {
          username: this.userInfo.name,
          usercount: this.userInfo.avatarCount
        }
      }
      postApiRequest('/api/pubMessage', obj).then((res) => {
        setTimeout(() => {
          that.openModel('发布成功', 'success')
          that.getMessageList()
          that.inputHeight = false
          that.inputValue = ''
        }, 2000)
      })
    },
    // 弹窗
    openModel (message, type) {
      this.$message({
        message: message,
        type: type
      })
    },
    // 分页
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      // if (val > 1) {
      //   console.log()
      //   this.messageList.slice(2)
      //   console.log(this.messageList)
      // }
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .message-content {
     background-color:#f1f1f1;
    .Promotional-language {
      padding-top: 10px;
      text-align: center;
      p {
        padding-left: 395px;
      }
    }
    .message-warp {
      width: 1024px;
      margin: 0 auto;
      .pub-btn {
        width: 100%;
        margin-top: 10px;
        text-align: right;
      }
      .el-input{
        text-align: center;
        width: 100%;
        .el-input__inner {
          height: 100%;
        }
      }
      .hotel-warpper{
        ul{
          padding: 0;
          li{
            display:flex;
            list-style:none;
            background-color:#fff;
            margin:10px 0;
            padding: 10px 15px;
            img{
              width:70px;
              height:70px;
              border-radius:50%;
            }
            .describe{
              display:flex;
              flex-direction:column;
              padding-left:50px;
              span{
                padding-bottom:9px;
              }
              .title{
                font-size:20px;
              }
              .address{
                color:blue;
              }
              .price{
                font-size:16px;
                color:black;
              }
            }
          }
        }
      }
    }
    .block{
      text-align:center;
      padding:10px 0;
      .el-pagination{
        ul{
          li{
            font-size:16px;
          }
        }
      }
    }
  }
</style>
