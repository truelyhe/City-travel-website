<template>
  <div class="diary-content">
    <Header :switchIndex="5"/>
    <div class="note-warp">
      <div class="me-info" >
        <div class="info-top">
          <img v-if="userInfo.avatarCount === 1" src="@/assets/avatar/none.jpg"/>
          <img v-if="userInfo.avatarCount === 2" src="@/assets/avatar/boy.jpeg"/>
          <img v-if="userInfo.avatarCount === 3" src="@/assets/avatar/girl.jpeg"/>
          <p v-if="userInfo">{{userInfo.name}}</p>
          <p v-else @click="toMagazineDetail()">未登录</p>
        </div>
        <p>此人很懒，什么也没留下</p>
      </div>
      <div>
        <!-- <el-input v-if="userInfo" placeholder="分享下你的旅游干货吧~~~" @focus="toMagazineDetail()"></el-input> -->
        <div @click="toMagazineDetail()">
          <el-input placeholder="分享下你的旅游干货吧~~~"></el-input>
        </div>
        <div class="detail" v-for="(item, index) in diaryList" :key="index">
          <div class="detail-top">
            <img v-if="item.user.usercount === 1" src="@/assets/avatar/none.jpg"/>
            <img v-if="item.user.usercount === 2" src="@/assets/avatar/boy.jpeg"/>
            <img v-if="item.user.usercount === 3" src="@/assets/avatar/girl.jpeg"/>
            <div class="top-right">
              <span class="nickname">{{item.user.username}}</span>
              <span>{{item.date}}</span>
            </div>
          </div>
          <div class="detail-bottom">
            <h2>{{item.title}}</h2>
            <p v-html="item.content">{{item.content}}</p>
            <!-- <p :class="{text: isHeigh && item.status}" v-html="item.content">{{item.content}}</p> -->
            <!-- <a v-if="item.status" href="javascript:;" @click="readAllFn(index)">{{isHeigh ? '展开全文' : '收起'}}</a> -->
            <div class="detail-img">
              <img v-for="(i, idx) in item.images" :key="idx" :src="i"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
import { apiUrl } from '@/api/config'
import { Loading } from 'element-ui'

export default {
  data () {
    return {
      diaryList: [], // 日志列表
      userInfo: '', // 个人信息
      visible2: false,
      isHeigh: true // 内容显示高度
    }
  },
  created () {
    // this.getDiaryList()
  },
  activated () {
    this.getUserInfo()
    this.getDiaryList()
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
    // 获取日志列表
    getDiaryList () {
      let loadingInstance = Loading.service({ fullscreen: true }) // 全屏加载
      this.$http.get(apiUrl + '/api/diaryList').then(
        response => {
          this.diaryList = response.body.reverse()
          this.getCountLines()
          loadingInstance.close()
        },
        response => console.log(response)
      )
    },
    getCountLines () {
      // let ele = document.getElementById('pContent')
      // const styles = window.getComputedStyle(ele, null)
      // const h = parseInt(styles.height, 10) // 获取内容高度
      // const lh = parseInt(styles.lineHeight, 10) // 获取行高
      // const lc = Math.round(h / lh) // 行数 = 整体高度/行高
    },
    // 查看全文
    readAllFn (index) {
      this.isHeigh = !this.isHeigh
    },
    // 跳转日志详情页
    toMagazineDetail () {
      if (!this.userInfo) {
        this.$alert('登录之后才可以发表日志喔，是否确认登录?', '登录确认', {
          confirmButtonText: '确定',
          callback: action => {
            if (action === 'confirm') {
              this.$router.push({name: 'login'})
            }
          }
        })
      } else {
        this.$router.push({
          name: 'magazineDetail',
          query: this.userInfo
        })
      }
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.diary-content {
  font-family: Microsoft Yahei;
  background: #f1f1f1;
  .note-warp {
    width: 1024px;
    margin: 20px auto 50px;
    display: flex;
    .me-info {
      background: #fff;
      margin: 10px 30px 15px 0;
      .info-top {
        margin-bottom: 10px;
        border-bottom: 1px solid #e3e3e3;
        text-align: center;
        width: 200px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-top: 20px;
          object-fit: cover;
        }
        p {
          font-size: 22px;
        }
      }
      p {
        padding: 0 10px;
      }
    }
    .el-input {
      margin-top: 10px;
      .el-input__inner {
        height: 100px;
        width: 100%;
        border: none;
        border-radius: 3px;
      }
    }
    .detail {
      background: #fff;
      margin: 15px 0;
      padding: 16px;
      .detail-top {
        display: flex;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .top-right {
          margin-left: 15px;
          padding-top: 8px;
          span {
            display: block;
            color: #94998a;
            font-size: 13px;
          }
          .nickname {
            color: #31332e;
            font-size: 16px;
            padding-bottom: 5px;
          }
        }
      }
      .detail-bottom {
        align-items: center;
        .detail-img {
           img {
            height: 210px;
            max-width: 100%;
            width: 247px;
            padding: 4px;
          }
        }
        p {
          font-size :16px;
          font-family: punctuation,"PingFangSC-Regular","Microsoft Yahei","sans-serif";
          -webkit-font-smoothing: subpixel-antialiased;
          white-space: pre-wrap;
          span {
            margin-bottom: 10px;
            display: block;
          }
          img {
            max-width: 33.3%;
            max-height: 200px;
          }
        }
        .text {
          height: 65px;
          overflow: hidden;
          line-height: 21px;
          margin: 0;
        }
        a {
          margin-bottom: 10px;
          color: #409eff;
          cursor: pointer;
          display: block;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
