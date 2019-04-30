<template>
  <div class="jinan-warpper">
    <Header :switchIndex="1"/>
    <div class="jinan-warp">
      <!-- <div class="Promotional-language">
        <h1>印象济南</h1>
      </div> -->
       <div class="city-new-warp">
        <!-- <div class="decribe">
          <span></span>
          <p>济南简介</p>
        </div> -->
        <div class="introduction">
          <p>济南 （山东省省会、副省级市）</p>
          <p>济南市，简称“济”，别称“泉城”，是山东省省会、  全国十五个副省级城市之一，环渤海地区南翼的中心城市，山东省的政治、文化、教育、交通和科技中心。  中国人民解放军北部战区陆军机关驻地  ，山东半岛城市群和济南都市圈核心城市、新一线城市。</p>
          <p>济南因境内泉水众多，拥有“七十二名泉”，被称为“泉城”，素有“四面荷花三面柳，一城山色半城湖”的美誉，济南八景闻名于世，是拥有“山、泉、湖、河、城”独特风貌的旅游城市，是国家历史文化名城、首批中国优秀旅游城市，史前文化——龙山文化的发祥地之一。</p>
          <!-- <p>济南北连首都经济圈，南接长三角经济圈，东西连通山东半岛与华中地区，是环渤海经济区和京沪经济轴上的重要交汇点，环渤海地区和黄河中下游地区中心城市之一。济南已成功举办亚洲杯、全运会、中国国际园林花卉博览会、中国艺术节等多项国际和国家级盛会，2015年第22届国际历史科学大会也在济南成功举办，标志着这项世界盛会创办一个多世纪后首次走进亚洲。2016年中国绿公司年会  、2017年第五届世界摄影大会在济南开幕。 </p>
          <p>济南历史悠久，是史前文化“龙山文化”的发祥地，区域内新石器时代的遗址城子崖，有先于秦长城的齐长城，有被誉为“海内第一名塑”的灵岩寺宋代彩塑罗汉、隋代大佛（位于历城区大佛村，凿山而成，建于隋代，为山东第一大佛）。中国首部诗歌总集《诗经》中有谭人所作讽刺诗《大东》，是现存最早的有关济南的文献。1986年12月被国务院公布为国家历史文化名城。</p> -->
        </div>
        <!-- <div>气候条件</div> -->
      </div>
      <div class="small-warp">
        <i class="iconfont">&#xe617;</i>
        <h3>地理位置</h3>
      </div>
      <!-- <div class="kailong"></div> -->
      <div class="city-new-warp">
        <div id="map" ref="map"></div>
        <div class="location">
          <p>济南位于山东省中西部，南依泰山，北跨黄河，背山面水，分别与西南部的聊城、北部的德州和滨州、东部的淄博、南部的泰安交界</p>
          <p>济南市位于北纬36°40′，东经117°00′，南依泰山，北跨黄河,地处鲁中南低山丘陵与鲁西北冲积平原的交接带上，地势南高北低。</p>
          <img src="http://www.sdnews.com.cn/gov/gdzwdt/201706/W020170622376657736987.jpg"/>
        </div>
      </div>
      <div class="small-warp">
        <i class="iconfont">&#xe619;</i>
        <h3>气候条件</h3>
      </div>
      <div class="weather-warp">
        <div class="flex-warp">
          <span>{{weather.content1}}</span>
          <img :src="weather.img"/>
        </div>
        <p>{{weather.content2}}</p>
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
  name: 'impression',
  data () {
    return {
      weather: {
        content1: '济南地处中纬度地带，由于受太阳辐射、大气环流和地理环境的影响，属于温带季风气候。其特点是季风明显，四季分明，春季干旱少雨，夏季温热多雨，秋季凉爽干燥，冬季寒冷少雪。年平均气温13.8℃，无霜期178天，气温最高42.5℃（1955年7月24日），最低气温零下19.7℃（1953年1月17日）。最高月均温27.2℃（7月），最低月均温-3.2℃（1月）。年平均降水量685毫米。年日照时数1870.9小时（2009年）',
        img: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=1da94eb5ba7eca8016053ee5a1229712/8d5494eef01f3a29824d3d589325bc315d607c9b.jpg',
        content2: '冬季亚洲大陆北部形成了蒙古高压，济南被极地大陆气团所控制，常受来自北方冷空气侵袭，寒冷晴朗，雨雪较少，多偏北风。夏季受热带、副热带海洋气团影响，盛行来自海洋的暖湿气流，天气炎热，雨量充沛，光照充足，多偏南风。春季和秋季是冬季转夏季、夏季转冬季的过渡季节，风向多变。一年之中，在不同季节，济南市处在不同大气环流控制之下，构成了春暖、夏热、秋爽、冬冷四季变化分明的气候。济南冬季长达136～157天，一般在11月上旬至次年3月下旬；夏季为105～120天，一般在5月下旬至9月上旬；春、秋季最短，都不足两个月。加之三面环山的地形，令水汽和热空气回流聚集不宜扩散，多于一般北方城市的夏季降水'
      }
    }
  },
  mounted () {
    this.map()
  },
  methods: {
    map () {
      let map = new window.BMap.Map(this.$refs.map)// 创建Map实例
      map.centerAndZoom(new window.BMap.Point(117.024967066, 36.6827847272), 11)// 初始化地图,设置中心点坐标和地图级别
      var opts = {type: window.BMAP_NAVIGATION_CONTROL_SMALL}
      map.addControl(new window.BMap.NavigationControl(opts))// 添加地图类型控件
      // map.addControl(new window.BMap.MapTypeControl({
      //   mapTypes: [
      //     BMAP_NORMAL_MAP,
      //     BMAP_HYBRID_MAP
      //   ]
      // }))
      map.setCurrentCity('济南')// 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true)// 开启鼠标滚轮缩放
    },
    articleDetail (id) {
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
  .jinan-warpper {
    background-color:#f1f1f1;
    .jinan-warp {
      margin: 0px auto;
      width: 1200px;
      .Promotional-language {
        padding-top: 10px;
        text-align: center;
        p {
          padding-left: 395px;
        }
      }
      .small-warp {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        border-radius: 8px;
        .iconfont {
          font-size: 40px;
          color: #409eff;
        }
        h3 {
          color: #409eff;
          font-size: 24px;
          margin: 0;
        }
      }
      .weather-warp {
        background: #fff;
        margin-bottom: 25px;
        .flex-warp {
          display: flex;
          span {
            padding: 15px;
            line-height: 30px;
            text-indent: 2rem;
          }
        }
        p {
          margin: 0;
          padding: 15px;
          line-height: 30px;
          text-indent: 2rem;
        }
      }
      .kailong{
        width:0;
        height:0;
        border-right:50px solid transparent;
        border-left:50px solid transparent;
        border-bottom:50px solid blue;
      }
      .city-new-warp {
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-align: left;
        margin: 0 auto;
        padding: 20px 0;
        #map {
          height: 400px;
          width: 70%;
          overflow: hidden;
        }
        .location {
          margin-left: 30px;
          background: #ffffff;
          box-shadow: 0 0 0.5px #000;
          p {
            margin: 0;
            text-indent: 2rem;
            padding: 5px;
          }
          img {
            margin-top: 8px;
            width: 100%;
            height: 285px;
          }
        }
        .introduction {
          margin: 20px auto 0;
          padding: 0 12px;
          p {
            font-size: 18px;
          }
        }
      }
    }
  }
</style>
