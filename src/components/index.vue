<template>
  <div class="content">
    <Header :switchIndex="0"/>
    <div class="Promotional-language">
      <h1>济河之南，泉水上城</h1>
      <p>济南-一座饮着泉水成长的城市</p>
    </div>
    <div class="carousel">
      <el-carousel :interval="4000" :autoplay="true" type="card" height="300px">
        <el-carousel-item v-for="(item, index) in slideImages" :key="index">
          <img :src="item.url"/>
          <!-- <h3>{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="city-new-warp">
      <div class="left">
        <div class="decribe">
          <div class="decribe-left">
            <span></span>
            <p>城市要闻</p>
          </div>
          <div class="decribe-right">更多 >></div>
        </div>
        <ul>
          <li v-for="(item, index) in newsList.slice(0, 8)" :key="index">
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
         <div class="decribe-right">更多 >></div>
        </div>
        <ul>
          <li v-for="(item, index) in noticeList.slice(0, 8)" :key="index">
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
        <div class="decribe-right">更多 >></div>
      </div>
      <div class="recommand-list">
        <el-row>
          <el-col :span="8" v-for="(item, index) in articleList.slice(0, 3)" :key="index" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <div @click="articleDetail( item._id )">
                <img src="http://pic1.win4000.com/wallpaper/6/57beb9d2bb240.jpg" class="image">
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
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
import { apiUrl } from '@/api/config'

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
          url: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1707/10/c17/52350883_1499669354917_mthumb.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552624612150&di=4d5ff23b6a78478e608b78824b748c04&imgtype=0&src=http%3A%2F%2Fs3.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-10-25%2F5903fb5c-3b10-4bc3-accc-351f93d65584_1280_.jpg'
        },
        {
          url: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1109/20/c0/9018070_9018070_1316483990187_mthumb.jpg'
        },
        {
          url: 'http://img.pconline.com.cn/images/photoblog/1/1/2/1/11219768/20103/12/1268382752595_mthumb.jpg'
        },
        {
          url: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1401/17/c10/30646639_1389938693914_mthumb.jpg'
        }
      ]
    }
  },
  created () {
  },
  mounted: function () {
    this.getNewsListFn()
    this.getNoticeListFn()
    this.getArticleListFn()
  },
  methods: {
    // 获取新闻列表
    getNewsListFn () {
      this.$http.get(apiUrl + '/api/newsList').then(
        response => { this.newsList = response.body.reverse() },
        response => console.log(response)
      )
    },
    // 获取通知列表
    getNoticeListFn () {
      this.$http.get(apiUrl + '/api/noticeList').then(
        response => { this.noticeList = response.body.reverse() },
        response => console.log(response)
      )
    },
    // 获取推荐列表
    getArticleListFn () {
      this.$http.get(apiUrl + '/api/articleList').then(
        response => { this.articleList = response.body.reverse() },
        response => console.log(response)
      )
    },
    // 跳转推荐详情
    articleDetail: function (id) {
      // 这边不能多一个斜杠 '/articleDetail/'  因为router定义的路由是 '/articleDetail:id'
      // 我把router改成 '/articleDetail/:id' 让前后端的路由规则一致
      this.$router.push('/articleDetail/' + id)
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content {
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
    .city-new-warp {
      display: flex;
      width: 100%;
      text-align: left;
      margin: 0 auto;
      padding-top: 20px;
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
          }
        }
        ul {
          list-style: none;
          margin: 15px;
          background: #ffffff;
          li {
            display: flex;
            padding: 10px;
            font-size: 12px;
            justify-content: space-between;
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
        }
      }
      .recommand-list {
        width: 1240px;
        margin: 0 auto;
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
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

   .clearfix:after {
      clear: both
  }

  .article_wrap {
    padding: 40px;
  }

  .article_title {
    display: inline-block;
    color: #222;
    font-size: 34px;
    font-weight: 600;
    border-bottom: 1px solid white;
    cursor: pointer;
  }

  .article_title:hover {
    border-bottom: 1px solid #222;
  }

  .article_info {
    color: #999;
    font-size: 14px;
    padding-top: 8px;
  }

  .tag_margin {
    margin: 3px;
  }

  .article_gist {
    text-align: left;
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 16px;
  }

  .article_button {
    display: inline-block;
    padding: 3px 12px;
    border: 2px solid #222;
    color: #222;
    font-size: 14px;
    cursor: pointer;
  }

  .article_all:hover {
    color: white;
    background: #000;
    font-weight: 600;
  }

  .article_underline {
    height: 1px;
    width: 40px;
    background: #545455;
    margin: 80px auto 0;
  }
</style>
