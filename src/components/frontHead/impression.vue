<template>
  <div class="content">
    <Header/>
    <div class="Promotional-language">
      <h1>印象济南</h1>
    </div>
    <div class="carousel">
      <el-carousel :interval="4000" :autoplay="true" type="card" height="350px">
        <el-carousel-item v-for="(item, index) in slideImages" :key="index">
          <img :src="item.url"/>
          <!-- <h3>{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="city-new-warp">
        <!-- <div class="decribe">
          <span></span>
          <p>济南简介</p>
        </div> -->
        <div class="introduction">
          <p>济南 （山东省省会、副省级市）</p>
          <p>济南市，简称“济”，别称“泉城”，是山东省省会、  全国十五个副省级城市之一，环渤海地区南翼的中心城市，山东省的政治、文化、教育、交通和科技中心。  中国人民解放军北部战区陆军机关驻地  ，山东半岛城市群和济南都市圈核心城市、新一线城市。</p>
          <p>济南因境内泉水众多，拥有“七十二名泉”，被称为“泉城”，素有“四面荷花三面柳，一城山色半城湖”的美誉，济南八景闻名于世，是拥有“山、泉、湖、河、城”独特风貌的旅游城市，是国家历史文化名城、首批中国优秀旅游城市，史前文化——龙山文化的发祥地之一。</p>
          <p>济南北连首都经济圈，南接长三角经济圈，东西连通山东半岛与华中地区，是环渤海经济区和京沪经济轴上的重要交汇点，环渤海地区和黄河中下游地区中心城市之一。济南已成功举办亚洲杯、全运会、中国国际园林花卉博览会、中国艺术节等多项国际和国家级盛会，2015年第22届国际历史科学大会也在济南成功举办，标志着这项世界盛会创办一个多世纪后首次走进亚洲。2016年中国绿公司年会  、2017年第五届世界摄影大会在济南开幕 </p>
          <p>济南历史悠久，是史前文化“龙山文化”的发祥地，区域内新石器时代的遗址城子崖，有先于秦长城的齐长城，有被誉为“海内第一名塑”的灵岩寺宋代彩塑罗汉、隋代大佛（位于历城区大佛村，凿山而成，建于隋代，为山东第一大佛）。中国首部诗歌总集《诗经》中有谭人所作讽刺诗《大东》，是现存最早的有关济南的文献。1986年12月被国务院公布为国家历史文化名城。</p>
        </div>
        <!-- <ul>
          <li>
            <span>济南 （山东省省会、副省级市）</span>
          </li>
          <li>
            <span>济南市，简称“济”，别称“泉城”，是山东省省会、  全国十五个副省级城市之一，环渤海地区南翼的中心城市，山东省的政治、文化、教育、交通和科技中心。  中国人民解放军北部战区陆军机关驻地  ，山东半岛城市群和济南都市圈核心城市、新一线城市。</span>
          </li>
          <li>
            <span>济南因境内泉水众多，拥有“七十二名泉”，被称为“泉城”，素有“四面荷花三面柳，一城山色半城湖”的美誉，济南八景闻名于世，是拥有“山、泉、湖、河、城”独特风貌的旅游城市，是国家历史文化名城、首批中国优秀旅游城市，史前文化——龙山文化的发祥地之一。</span>
          </li>
          <li>
            <span>济南北连首都经济圈，南接长三角经济圈，东西连通山东半岛与华中地区，是环渤海经济区和京沪经济轴上的重要交汇点，环渤海地区和黄河中下游地区中心城市之一。济南已成功举办亚洲杯、全运会、中国国际园林花卉博览会、中国艺术节等多项国际和国家级盛会，2015年第22届国际历史科学大会也在济南成功举办，标志着这项世界盛会创办一个多世纪后首次走进亚洲。2016年中国绿公司年会  、2017年第五届世界摄影大会在济南开幕  </span>
          </li>
          <li>
            <span>济南历史悠久，是史前文化“龙山文化”的发祥地，区域内新石器时代的遗址城子崖，有先于秦长城的齐长城，有被誉为“海内第一名塑”的灵岩寺宋代彩塑罗汉、隋代大佛（位于历城区大佛村，凿山而成，建于隋代，为山东第一大佛）。中国首部诗歌总集《诗经》中有谭人所作讽刺诗《大东》，是现存最早的有关济南的文献。1986年12月被国务院公布为国家历史文化名城。</span>
          </li>
        </ul> -->
    </div>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
// import { apiUrl } from '@/api/config'

export default {
  name: 'impression',
  data () {
    return {
      slideImages: [
        {
          url: 'http://img.redocn.com/sheying/20160409/jinandaminghudechaoranlou_6135261.jpg'
        },
        {
          url: 'http://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/w=600/sign=370f528f8518367aad897cdd1e728b68/503d269759ee3d6dd2a5186d40166d224f4ade31.jpg'
        },
        {
          url: 'http://nimg.ijntv.cn/material/news/img/2017/11/ec71832847c6dcec3e5d06a7d23b0f14.jpg'
        },
        {
          url: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/lvpics/s=800/sign=326e38f1fbf2b211e02e884efa816511/91ef76c6a7efce1bbf409648af51f3deb58f65cc.jpg'
        },
        {
          url: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1206/13/c0/11982097_11982097_1339562677187.jpg'
        },
        {
          url: 'http://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/w=1000/sign=11786cac9d510fb378197397e903c995/dbb44aed2e738bd444a99024a28b87d6277ff91f.jpg'
        },
        {
          url: 'http://img.redocn.com/sheying/20140808/jinantuquan_2871159.jpg'
        }
      ]
    }
  },
  methods: {
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
      .introduction {
        p {
          padding: 0 100px;
        }
      }
    }
  }
</style>
