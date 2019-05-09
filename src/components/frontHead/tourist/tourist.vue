<template>
  <div class="content">
    <Header :switchIndex="2"/>
    <div class="tour-warp">
      <div class="left-item">
        <div class="left-top left-search">
          <p>景点搜索</p>
          <el-select
            v-model="searchValue"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" v-if="searchValue" @click="searchTourFn">搜索</el-button>
        </div>
        <div class="left-top">
          <p>景点排行榜</p>
        </div>
        <ul>
          <li v-for="(item, index) in rankList" :key="index">
            <div class="first" :style="{background: item.id === 1 ? 'red' : item.id === 2 ? 'yellow' : item.id === 3 ? 'orange' : '',
             color: item.id === 1 || item.id === 2 || item.id === 3 ? '#fff' : ''}">
             <span>{{item.id}}</span>
            </div>
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="right-item">
        <div class="Promotional-language">
          <h1>景区景点</h1>
          <h4>济南，黄河之南，大明湖畔的“泉城”，有72名泉，自古就有“家家泉水，户户垂杨”之誉</h4>
        </div>
        <div class="tour" v-for="(item, index) in searchList" :key="index">
          <h2>{{item.title}}</h2>
          <p>{{item.decribe}}</p>
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
// import { apiUrl } from '@/api/config'

export default {
  data () {
    return {
      searchValue: '', // 搜索值
      options: [],
      list: [],
      loading: false,
      rankList: [
        {
          id: 1,
          name: '趵突泉'
        },
        {
          id: 2,
          name: '大明湖'
        },
        {
          id: 3,
          name: '千佛山'
        },
        {
          id: 4,
          name: '九如山瀑布群'
        },
        {
          id: 5,
          name: '红叶谷'
        },
        {
          id: 6,
          name: '泉城广场'
        },
        {
          id: 7,
          name: '黑虎泉'
        }
      ],
      searchList: [],
      tourList: [
        {
          title: '趵突泉',
          decribe: '四面荷花三面柳，一城山色半城湖”，趵突泉位于济南市历下区，南靠千佛山，东临泉城广场，北望大明湖，五龙潭。该泉位居济南七十二名泉之首，被誉为“天下第一泉”。老舍这样写道趵突泉——泉太好看了。景区票价不贵，5A景区，推荐参观！',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556634963260&di=dcb46359f28ffd5260f2233afd6b55c8&imgtype=0&src=http%3A%2F%2Fimage.naic.org.cn%2Fuploadfile%2F2017%2F1204%2F1512365361231597.jpg'
        },
        {
          title: '大明湖',
          decribe: '泉城八景之一，与趵突泉五龙潭黑虎泉等形成泉水景点群，历史文化底蕴深厚。大明湖景色优美秀丽，湖水水色澄碧，国家AAAAA级旅游景区--天下第一泉风景区的核心组成部分之一。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556635033103&di=408263bb9efd5b077a3ded99bf1c86cf&imgtype=0&src=http%3A%2F%2Fp1.ifengimg.com%2Fa%2F2018_06%2Faad22d6f5fa3e6c_size131_w900_h600.jpg'
        },
        {
          title: '大明湖海底世界',
          decribe: '大明湖海底世界位于泉城济南美丽的大明湖畔，是一座集海洋旅游、海底观光、科普为一体的现代化海洋生物展览馆。里面不是很大，但对于第一次看海底动物的孩子们来说还是可以尝试的！里面超级凉快，有人鱼表演，海豹表演，周一至周五去比较合适，人少，玩的开！',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556635412602&di=8f77f99390f5a34789d9098c7331ee74&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1508%2F03%2Fc2%2F10597550_1438569599241_mthumb.jpg'
        },
        {
          title: '千佛山',
          decribe: '千佛山坐落于济南市区南部，与趵突泉、大明湖并称为“济南三大名胜”。 价格厚道亲民，30元钱。不愿意徒步登山的话，可以坐索道上去，另外花费20元钱，山上景色不错，可以俯视济南市区，山上还有不少果树。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556635686702&di=2b27e5e9951c4039fefe7bb383bdacab&imgtype=0&src=http%3A%2F%2Fpic.vjshi.com%2F2018-08-02%2F961e48758f994d3de0ca77cab852ce67%2Fonline%2Fpuzzle.jpg%3Fx-oss-process%3Dstyle%2Fwatermark'
        },
        {
          title: '珍珠泉',
          decribe: '珍珠泉为泉城-济南的第三大名泉，涌泉如万千珍珠浮出。珍珠泉和名字一样好看好听，在泉城路旁边的省委大院里面，周边景色很好，泉水很清，流动到整个珍珠泉大院里面，里面很多鱼儿游来游去的，免费的景点，没有门票，很值得在这里溜达溜达！',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556635777780&di=46da4cbfd8e49977e121289051331410&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Flvpics%2Fh%3D800%2Fsign%3Df9b79d1772cf3bc7f700c0ece101babd%2Fa50f4bfbfbedab649df12cdaf536afc379311e2c.jpg'
        },
        {
          title: '济南方特东方神画',
          decribe: '感觉挺好的，性价比很高，里面的游乐设施以传统文化为主题，让我们在身心放松的同时又亲身感受我国文化的博大精深。最喜欢水漫金山寺，景象壮观，丛林飞车和跳楼机很刺激，总体来说还不错，值得大家去玩。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556635858048&di=09590b0d62c021119cd1eb597d7aa9f0&imgtype=0&src=http%3A%2F%2Fp3-q.mafengwo.net%2Fs9%2FM00%2F89%2FB1%2FwKgBs1ehVaiANrNGAAZDBvUJtGw01.jpeg'
        },
        {
          title: '九如山瀑布群风景区',
          decribe: '很不错的风景，有山有水，现在雨水少，所以瀑布很小，但是真的很美。值得去游玩，而且不累！每爬一段有凉亭歇脚，有多处免费饮茶处，整个景区干净卫生，大自然是最好的画家，这里绝对的天然氧吧，感觉去洗洗肺真好。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557230550&di=da534a5ee1611d8b01795309999e00d1&imgtype=jpg&er=1&src=http%3A%2F%2Fp1.ssl.qhmsg.com%2Ft01eebd459eec0efa3d.jpg'
        },
        {
          title: '黑虎泉',
          decribe: '这个景区虽然地方小，但有时间的话还是值得一去的，济南最著名的就是泉水，其中黑虎泉是大家都爱来的地方，而且是免费参观的，济南最有阳刚之气的泉水！景区里还可以凭刷身份证免费进泉水浴场游泳，很赞。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556634776912&di=58b0300ca5172e3ec2a74c881165d385&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Flvpics%2Fh%3D800%2Fsign%3De917511778ec54e75eec171e89389bfd%2Fa71ea8d3fd1f41345f22d957261f95cad1c85e86.jpg'
        }
      ]
    }
  },
  mounted () {
    this.list = this.tourList.map(item => {
      return { value: item.title, label: item.title }
    })
    this.searchList = this.tourList
    this.test()
  },
  methods: {
    // 检索输入值
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    // 搜索景点
    searchTourFn () {
      this.searchList = this.tourList
      this.searchList = this.searchList.filter(item => {
        return item.title.toLowerCase()
          .indexOf(this.searchValue.toLowerCase()) > -1
      })
    },
    test () {
      // let arr = [1, 2, 3, 4]
      // let result = arr.find(i => i > 2)
      // alert(result) // 输出3
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
    background-color:#f1f1f1;
    .tour-warp {
      width: 1024px;
      margin: 20px auto 50px;
      display: flex;
      .left-item {
        background: #fff;
        margin: 10px 30px 15px 0;
        .left-top {
          margin-bottom: 10px;
          border-bottom: 1px solid #e3e3e3;
          text-align: center;
          width: 200px;
          p {
            font-size: 22px;
            letter-spacing: 2px
          }
        }
        .left-search {
          padding-bottom: 50px;
          border-bottom: 1px solid #e3e3e3;
          .el-select {
            margin-top: 10px;
          }
          .el-button--primary {
            margin-top: 20px;
          }
        }
        ul {
          width: 200px;
          padding: 0;
          margin-top: 30px;
          li {
            list-style: none;
            margin-bottom: 15px;
            padding: 0 30px;
            display: flex;
            .first {
              margin-right: 10px;
              border-radius: 50%;
              width: 22px;
              height: 22px;
              text-align: center;
            }
          }
        }
      }
      .right-item {
        background: #fff;
        margin-top: 10px;
        .Promotional-language {
          padding-top: 10px;
          text-align: center;
          p {
            padding-left: 395px;
          }
        }
        .tour{
          margin-bottom: 20px;
          h2{
            text-align: center;
          }
          p {
            font-size: 16px;
            line-height: 24px;
            color: #333;
            text-align: justify;
            padding: 0 30px;
          }
          img {
            display: block;
            margin: 0 auto;
            width: 500px;
          }
        }
      }
    }
    .foot_name {
      margin-top: 25px;
    }
  }
</style>
