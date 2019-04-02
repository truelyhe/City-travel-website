<template>
  <div class="content">
    <Header :switchIndex="5"/>
    <div class="note-warp">
      <el-input placeholder="分享下你的旅游干货吧~~~" @focus="toMagazineDetail"></el-input>
      <div class="detail" v-for="(item, index) in magList" :key="index">
        <div class="top">
          <img :src="item.img"/>
          <div class="top-right">
            <span class="nickname">昵称</span>
            <span>2019-04-02</span>
          </div>
        </div>
        <div class="bottom">
          <h2>{{item.title}}</h2>
          <p :class="{text: isHeigh}">{{item.content}}</p>
          <a href="javascript:;" @click="readAllFn()">{{isHeigh ? '展开全文' : '收起'}}</a>
          <img :src="item.img"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
export default {
  data () {
    return {
      magList: [
        {
          title: '标题',
          img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=417473301,1686721339&fm=173&app=25&f=JPEG?w=550&h=367&s=3F946D813E1822C602B47DD80300C090',
          content: '不适合你的裙子你还在穿么？？ 根据体型选择合适的裙子只需要三步！！你get到了么1.黄瓜型身材除了曲线不明显，其他没毛病。所以建议黄瓜型身材拒绝直筒款式的裙子。2.苹果型身材的特点是胖在腰上，一定不要穿紧身的裙子，超容易暴露缺点，所以穿腰部略宽松的裙子。3.梨形身材是亚洲女性最常见的身材，胯宽腿粗屁股大。真的不要穿直筒或者紧身的裙子，超容易暴露缺点!我建议选择A字裙或者百褶裙，对梨形身材十分友好。'
        },
        {
          title: '标题',
          img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=417473301,1686721339&fm=173&app=25&f=JPEG?w=550&h=367&s=3F946D813E1822C602B47DD80300C090',
          content: '非常好'
        },
        {
          title: '标题',
          img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=417473301,1686721339&fm=173&app=25&f=JPEG?w=550&h=367&s=3F946D813E1822C602B47DD80300C090',
          content: '非常好'
        }
      ],
      isHeigh: true // 内容显示高度
    }
  },
  methods: {
    toMagazineDetail () {
      this.$router.push({name: 'magazineDetail'})
    },
    readAllFn () {
      this.isHeigh = !this.isHeigh
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
  font-family: Microsoft Yahei;
  background: #f1f1f1;
  .note-warp {
    width: 860px;
    margin: 20px auto 50px;
    .el-input {
      margin-top: 10px;
      .el-input__inner {
        height: 100px;
      }
    }
    .detail {
      background: #fff;
      margin: 15px 0;
      padding: 16px;
      .top {
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
      .bottom {
        align-items: center;
        img {
          height: 180px;
          max-width: 100%;
        }
        p {
          font-size :16px;
          font-family: punctuation,"PingFangSC-Regular","Microsoft Yahei","sans-serif";
          -webkit-font-smoothing: subpixel-antialiased;
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
        .text {
          height: 65px;
          overflow: hidden
        }
      }
    }
  }
}
</style>
