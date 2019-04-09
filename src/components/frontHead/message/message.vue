<template>
  <div class="message-content">
    <Header :switchIndex="6"/>
    <div class="Promotional-language">
      <h1>留言板</h1>
    </div>
    <div @click="lowHeightFn()">
      <div class="message-warp" @click.stop>
        <div>
          <el-input placeholder="留下些什么吧~~" v-model="inputValue" :style="{height: inputHeight ? '150px' : '50px'}" @focus="changeInputFn()"></el-input>
        </div>
        <div class="pub-btn">
          <el-button type="primary" v-if="inputHeight" @click="pubMessageFn()">发布</el-button>
        </div>
        <div class="hotel-warpper">
          <ul v-if="page === 1">
              <li>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554737480834&di=3dc1d8a937e99cd58d32f5d6f27e993e&imgtype=0&src=http%3A%2F%2Fimg1.touxiang.cn%2Fuploads%2F20130406%2F06-035922_449.jpg"/>
                <div class="describe">
                <span class="title">伊宁先生</span>
                  <span class="address">美食</span>
                  <span class="price">宽厚里的美食小吃确实很多，不过在节假日建议大家要早点去哦，人会很多！</span>
                </div>
              </li>
              <li>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555332273&di=568c26fcfd10a2b7aa5a1e8e3ed10cc7&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa72d9295597ae757d9912e36477605638f4bdfe128e3-zAk9VK_fw236"/>
                <div class="describe">
                <span class="title">皮卡丘</span>
                  <span class="address">住宿</span>
                  <span class="price">芙蓉街附近的民俗别有一番风味，而且离附近景点很近</span>
                </div>
              </li>
              <li>
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3203872256,1562775343&fm=26&gp=0.jpg"/>
                <div class="describe">
                <span class="title">曾小贤</span>
                  <span class="address">景点</span>
                  <span class="price">大明湖果然别有一番风味，夏天去能感受到大明湖畔的夏雨荷，哈哈哈</span>
                </div>
              </li>
              <li>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555332318&di=d70fcd983860d41eb7eb8e54089a640d&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ghost64.com%2Fqqtupian%2FzixunImg%2Flocal%2F2017%2F11%2F24%2F15114947944332.jpg"/>
                <div class="describe">
                <span class="title">刘尚理</span>
                  <span class="address">美食</span>
                  <span class="price">强烈推荐芙蓉街里的一家小吃-芙蓉泉烤鸡爪</span>
                </div>
              </li>
            </ul>
            <ul v-if="page === 2">
              <li>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554547281553&di=da513c8514fbbe39b10fa0c59118f3a2&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fc2%2F286035%2F%25E5%25A4%25A7%25E5%25BA%258A2%25E7%25B1%25B32.jpg"/>
                <div class="describe">
                <span class="title">济南·精品公寓酒店</span>
                  <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
                  <span class="price">￥180</span>
                </div>
              </li>
                <li>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554547281550&di=293f1602564450cb2060852546af9589&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fc2%2F185183%2F%25E8%25B1%25AA%25E5%258D%258E%25E5%25A4%25A7%25E5%25BA%258A%25E6%2588%25BF1.jpg"/>
                <div class="describe">
                <span class="title">泉城印象·精品公寓酒店</span>
                  <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
                  <span class="price">￥180</span>
                </div>
              </li>
                <li>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554547281548&di=8867940355f8de4334a87119fb23feab&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fdl1210%2F125936%2F29.jpeg"/>
                <div class="describe">
                <span class="title">泉城印象·精品公寓酒店</span>
                  <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
                  <span class="price">￥180</span>
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
        :total="20">
      </el-pagination>
    </div>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
// import { apiUrl } from '@/api/config'

export default {
  data () {
    return {
      inputHeight: false,
      inputValue: '',
      page: 1
    }
  },
  mounted () {
  },
  methods: {
    // 改变输入框高度
    changeInputFn () {
      this.inputHeight = true
    },
    lowHeightFn () {
      console.log('aaa')
      this.inputHeight = false
    },
    // 发布留言
    pubMessageFn () {
      // console.log(this.inputValue.replace(/[^\x00-\xff]/g, '01').length)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      if (val === 1) {
        this.page = 1
      } else {
        this.page = 2
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
              width:80px;
              height:80px;
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
