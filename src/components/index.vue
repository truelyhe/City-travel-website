<template>
  <div class="index-warpper">
    <Header :switchIndex="0"/>
    <div class="Promotional-language">
      <h1>济河之南，泉水上城</h1>
      <p>济南-一座饮着泉水成长的城市</p>
    </div>
    <div class="carousel">
      <el-carousel :interval="4000" :autoplay="true" type="card" height="400px">
        <el-carousel-item v-for="(item, index) in slideImages" :key="index">
          <img :src="item.url"/>
          <!-- <h3>{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index-warp">
      <div class="city-new-warp">
        <div class="left">
          <div class="decribe">
            <div class="decribe-left">
              <span></span>
              <p>城市要闻</p>
            </div>
            <div class="decribe-right" @click="toMorePage('0')">更多 >></div>
          </div>
          <ul>
            <li v-for="(item, index) in newsList.slice(0, 8)" :key="index" @click="articleDetail('0', item._id)">
              <span>{{item.title}}</span>
              <span>{{item.date.split(' ')[0]}}</span>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="decribe">
            <div class="decribe-left">
              <span></span>
              <p>通知公告</p>
            </div>
          <div class="decribe-right" @click="toMorePage('1')">更多 >></div>
          </div>
          <ul>
            <li v-for="(item, index) in noticeList.slice(0, 8)" :key="index" @click="articleDetail('1', item._id)">
              <span>{{item.title}}</span>
              <span>{{item.date.split(' ')[0]}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="recommand">
        <div class="decribe">
          <div class="decribe-left">
            <span></span>
            <p>今日推荐</p>
          </div>
          <div class="decribe-right" @click="toMorePage('2')">更多 >></div>
        </div>
        <div class="recommand-list">
          <el-row>
            <el-col :span="8" v-for="(item, index) in articleList.slice(0, 3)" :key="index" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <div @click="articleDetail('2', item._id)">
                  <img :src="item.coverImg" class="image">
                  <div style="padding: 14px;">
                    <span>{{ item.title }}</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ item.date }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
import { getApiRequest } from '@/api/apiRequest'

export default {
  name: 'Article',
  data () {
    return {
      currentDate: new Date(),
      newsList: [], // 新闻列表
      noticeList: [], // 公告列表
      articleList: [], // 推荐列表
      slideImages: [ // 轮播图
        {
          url: 'http://youimg1.c-ctrip.com/target/tg/712/129/064/6e60e07d3d254166ade6920a1335eedb.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554733360149&di=ad18f920aa10c2e33998b763874f3e37&imgtype=0&src=http%3A%2F%2Fp4-q.mafengwo.net%2Fs7%2FM00%2FAA%2FF4%2FwKgB6lSqSLSAAC1EAAfI0D50org378.png'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552624612150&di=4d5ff23b6a78478e608b78824b748c04&imgtype=0&src=http%3A%2F%2Fs3.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-10-25%2F5903fb5c-3b10-4bc3-accc-351f93d65584_1280_.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554733602236&di=27b80ff9bca81dc98de53be11edef182&imgtype=0&src=http%3A%2F%2Fwww.mmgl.net%2FuploadFile%2FlineImg%2F201705%2F20170525091417641.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554733470498&di=cbaefdcd380a383ac8aafbb5521a840b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01772e5944ec9ba8012193a31e9846.jpg%403000w_1l_2o_100sh.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554733470498&di=0fd93a928ccb4482f3b8e7712a73ff71&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01360d5944eed6a8012193a3fbe048.jpg%402o.jpg'
        }
      ]
    }
  },
  created () {
    this.getNewsListFn()
    this.getNoticeListFn()
    this.getArticleListFn()
  },
  methods: {
    // 获取新闻列表
    getNewsListFn () {
      getApiRequest('/api/newsList').then((res) => {
        this.newsList = res.reverse()
      })
    },
    // 获取通知列表
    getNoticeListFn () {
      getApiRequest('/api/noticeList').then((res) => {
        this.noticeList = res.reverse()
      })
    },
    // 获取推荐列表
    getArticleListFn () {
      getApiRequest('/api/articleList').then((res) => {
        this.articleList = res.reverse()
      })
    },
    // 浏览更多
    toMorePage (mark) {
      let query = {
        mark: mark
      }
      this.$router.push({
        name: 'more',
        query: query
      })
    },
    // 跳转详情
    articleDetail (state, id) {
      // 这边不能多一个斜杠 '/articleDetail/'  因为router定义的路由是 '/articleDetail:id'
      // 我把router改成 '/articleDetail/:id' 让前后端的路由规则一致
      let params = {
        id: id,
        state: state
      }
      this.$router.push({
        name: 'articleDetail',
        params: params
      })
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index-warpper {
    .Promotional-language {
      padding-top: 10px;
      text-align: center;
      p {
        padding-left: 395px;
      }
    }
    .carousel {
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      .el-carousel__item img {
       width: 100%;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
    .index-warp {
      margin: 0 20px;
      margin: 0 auto;
      width: 1400px;
      margin-top: 30px;
    }
    .city-new-warp {
      display: flex;
      width: 100%;
      text-align: left;
      margin: 0 auto;
      .left , .right {
        width: 50%;
        padding-left: 15px;
        .decribe {
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          .decribe-left {
            display: flex;
            align-items: center;
            span {
              width: 8px;
              height: 18px;
              background: #409eff;
              margin-right: 6px;
            }
            p {
              margin: 0;
              color: #409eff;
            }
          }
          .decribe-right {
            color: #409eff;
            cursor: pointer;
          }
        }
        ul {
          list-style: none;
          margin: 15px;
          padding: 0 20px;
          li {
            display: flex;
            padding: 10px 5px;
            margin: 5px 0;
            font-size: 12px;
            cursor: pointer;
            justify-content: space-between;
            border-bottom: 1px solid #f1f1f1;
          }
        }
      }
    }
    .recommand {
      padding-bottom: 30px;
      overflow: hidden;
      .el-col, .el-col-8 {
        width: 30%;
        .el-card {
          cursor: pointer
        }
      }
      .el-col-offset-2 {
        margin-left: 5%;
      }
      .decribe {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        margin: 15px;
        .decribe-left {
          display: flex;
          align-items: center;
          span {
            width: 8px;
            height: 18px;
            background: #409eff;
            margin-right: 6px;
          }
          p {
            margin: 0;
            color: #409eff;
          }
        }
        .decribe-right {
          color: #409eff;
          cursor: pointer;
        }
      }
      .recommand-list {
        width: 1240px;
        margin: 0 auto;
        padding: 10px 0;
      }
    }
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    height: 250px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

   .clearfix:after {
      clear: both
  }
</style>
