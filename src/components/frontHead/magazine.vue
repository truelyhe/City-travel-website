<template>
  <div class="content">
    <Header :switchIndex="5"/>
    <div class="note-warp">
      <el-input placeholder="分享下你的旅游干货吧~~~" @focus="toMagazineDetail"></el-input>
      <div class="detail" v-for="(item, index) in magList" :key="index">
        <div>
          <h2>{{item.title}}</h2>
        </div>
        <div class="pic">
          <img :src="item.img"/>
          <span>{{item.content}}</span>
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
          content: '非常好'
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
      ]
    }
  },
  methods: {
    toMagazineDetail () {
      this.$router.push({name: 'magazineDetail'})
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
  .note-warp {
    width: 960px;
    margin: 10px auto;
    .el-input {
      margin-top: 10px;
      .el-input__inner {
        height: 100px;
      }
    }
    .detail {
      .pic{
        display: flex;
        align-items: center;
        img {
          height:100px;
          width:160px;
          border-radius: 20px;
        }
        span{
          font-size :15px;
        }
      }
    }
  }
}
</style>
