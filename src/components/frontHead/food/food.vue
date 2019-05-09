<template>
  <div class="content">
    <Header :switchIndex='3'/>
    <div class="Promotional-language">
      <h1>餐饮美食</h1>
      <h3>泉城济南美食攻略，吃到前5个，算你没有白来！</h3>
    </div>
    <div class="food" v-for="(item, index) in foodList" :key="index">
      <h2>{{item.title}}</h2>
      <p>{{item.gist}}</p>
      <img :src="item.images"/>
    </div>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
// import { apiUrl } from '@/api/config'
import { getApiRequest } from '@/api/apiRequest'

export default {
  name: 'food',
  data () {
    return {
      foodList: [
        {
          title: '奶汤蒲菜',
          gist: '如果你来到了济南，就一定吃一下泉水宴，吃泉水宴那必点奶汤蒲菜了，它是济南一道有名的传统风味名菜，也是当地泉水宴中重量级很高的菜品。据说蒲菜主要是产于大明湖畔，在古代也就是很早的时候呢，就非常有名气了，如果您下次有机会来济南旅游，记得一定要尝一尝奶汤蒲菜。',
          images: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1994184352,1003459121&fm=173&app=25&f=JPEG?w=393&h=285&s=E838AE564F2277265A53DF680300607D'
        },
        {
          title: '油旋',
          gist: '如果你吃过了奶汤蒲菜，那再向你介绍一道主食，有点儿像北方的烧饼，但是形状会有些不太一样，它的名字叫油旋。特点是外焦，里嫩，葱香扑鼻，形状就好像漩涡一样，表面成金黄色。据说济南的油旋已经被列入山东省第二批非物质文化遗产，是不是很想吃呢？别着急，济南还有很多好吃的哦，咱们继续往下看。',
          images: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3927941497,1572018685&fm=173&app=25&f=JPEG?w=540&h=364&s=338542A654077B53403F0F790300C07A'
        },
        {
          title: '把子肉',
          gist: '如果你是喜欢吃肉食的朋友，那来到济南不得不提的就是把子肉了，它是你的不可错过的美食。济南把子肉不管对在当地人还是外地朋友来说，都是非常的受欢迎。记得在济南的那段时间，白天工作餐选择一块把子肉，下饭！晚上一个人饿了，来到路边摊来一块把子肉，再叫一瓶啤酒，自由而美味，简直是幸福爆棚。它是把一块肥肉切成片，用细线穿起来，放上酱油腌制调味而成，它的特点是肥而不腻，瘦而不柴，入口醇厚。如果来到济南吃把子肉时，根据喜好选择肥瘦哦，一般老板们也会很热情的询问你的喜好。',
          images: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2457534696,4268831582&fm=173&app=25&f=JPEG?w=437&h=268&s=45A486BE62773B8658B6352303005069'
        },
        {
          title: '草包包子',
          gist: '草包包子也是济南不得不说的一道美食，已经是百年老字号了。在草包包子铺一般都是现做 ，汤汁非常的鲜美，口感松软，如果外带通常是用荷叶包着，非常值得大家尝一尝。哦，对了，店铺不多吃的人很多，记得提前找攻略哦。如果你来到济南，这百年老字号很值得你去体验！',
          images: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1767551454,1201439831&fm=173&app=25&f=JPEG?w=485&h=363&s=BB5A2FD12876580342B54C6103001076'
        },
        {
          title: '盘丝饼',
          gist: '盘丝饼跟油旋有点儿类似，也是属于面饼类的主食。它的特点是外形好像头发丝一样盘旋而成，据说制作工艺非常复杂，但是它的价格却很便宜。因为商家赚不到钱，所以一般不会轻易去制做。如果你有机会吃到济南的盘丝饼，那么你真算是比较幸运了。',
          images: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2191804744,3219689266&fm=173&app=25&f=JPEG?w=484&h=325&s=730127AA42AB110736967A790300905C'
        },
        {
          title: '锅贴',
          gist: '再说一下锅贴，这个大家可能都知道，在北方和南方都比较常见。就是把这个饺子菜盒子之类的在煎饼锅上加上油，把它炸出来，但是呢，济南的锅贴的形状会有点儿不太一样，一般呈长条形，里面加了肉或者韭菜等素菜，外形的有点儿像春卷',
          images: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=784971355,1476970692&fm=173&app=25&f=JPEG?w=400&h=263&s=78987F962E4275430C16576A03007078'
        },
        {
          title: '酥锅',
          gist: '如果你来到了济南，就一定吃一下泉水宴，吃泉水宴那必点奶汤蒲菜了，它是济南一道有名的传统风味名菜，也是当地泉水宴中重量级很高的菜品。据说蒲菜主要是产于大明湖畔，在古代也就是很早的时据说是清朝时候一位叫苏小妹的女子所创，外形有点儿像个平盘，就像在南方吃的卤菜的拼盘。它的特点是食材比较丰富，原料是以海带白菜为主，还会放一些卤豆腐、油炸花生做配料。虽不是济南当地特色，但与其他地方的酥锅也有不同的地方哦。候呢，就非常有名气了，如果您下次有机会来济南旅游，记得一定要尝一尝奶汤蒲菜。',
          images: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2039761797,3373103526&fm=173&app=25&f=JPEG?w=633&h=437&s=14044CB64EA78ED200271CBC0300D048'
        }
      ]
    }
  },
  created () {
    getApiRequest('/api/foodList').then((res) => {
      // this.messageList = res.reverse()
    })
  },
  methods: {
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content {
    background-color:#f1f1f1;
    .Promotional-language {
      padding-top: 10px;
      text-align: center;
      p {
        padding-left: 395px;
      }
    }
    .food {
      margin-bottom: 50px;
      h2{
        margin-left :200px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        color: #333;
        text-align: justify;
        margin: 22px 200px ;
      }
      img {
        display: block;
        margin: 0 auto;
        width: 500px;
      }
    }
  }
</style>
