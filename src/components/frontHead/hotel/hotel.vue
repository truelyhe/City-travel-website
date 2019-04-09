<template>
  <div class="content">
    <Header :switchIndex='4'/>
    <div class="Promotional-language">
      <h1>住宿指南</h1>
    </div>
    <div class="hotel-warpper">
      <ul v-if="page === 1">
          <li>
            <img src="@/assets/hotel/hotel1.jpg"/>
            <div class="describe">
            <span class="title">泉城印象·精品公寓酒店</span>
              <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
              <span class="price">￥289</span>
            </div>
          </li>
           <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554547281553&di=da513c8514fbbe39b10fa0c59118f3a2&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fc2%2F286035%2F%25E5%25A4%25A7%25E5%25BA%258A2%25E7%25B1%25B32.jpg"/>
            <div class="describe">
            <span class="title">山东舜和国际酒店</span>
              <span class="address">历下区经十路26008号</span>
              <span class="price">￥319</span>
            </div>
          </li>
           <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554547281550&di=293f1602564450cb2060852546af9589&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fc2%2F185183%2F%25E8%25B1%25AA%25E5%258D%258E%25E5%25A4%25A7%25E5%25BA%258A%25E6%2588%25BF1.jpg"/>
            <div class="describe">
            <span class="title">济南华联大酒店</span>
              <span class="address">经二纬十一路571号(华联商厦西门) </span>
              <span class="price">￥229</span>
            </div>
          </li>
           <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554547281548&di=8867940355f8de4334a87119fb23feab&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fdl1210%2F125936%2F29.jpeg"/>
            <div class="describe">
            <span class="title">布丁酒店(济南高铁西客站店)</span>
              <span class="address">齐鲁大道与烟台路交叉口金科城B地块一期2号楼1101</span>
              <span class="price">￥229</span>
            </div>
          </li>
        </ul>
        <ul v-if="page === 2">
          <li>
            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1554537190&di=c5f51f7b9fc9526030a1cdfec27732ee&src=http://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/lvpics/h=800/sign=58edaedee8f81a4c3932e1c9e72b6029/203fb80e7bec54e7620f06b4ba389b504ec26abc.jpg"/>
            <div class="describe">
            <span class="title">济南新世纪商务酒店</span>
              <span class="address">张庄路192号</span>
              <span class="price">￥269</span>
            </div>
          </li>
            <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554547281555&di=4ae087627e8a7029d33f3b6533b4a142&imgtype=0&src=http%3A%2F%2Fimg.zx123.cn%2FResources%2Fzx123cn%2Fuploadfile%2F2017%2F0222%2F20170222165608_36883.jpg"/>
            <div class="describe">
            <span class="title">全季酒店</span>
              <span class="address">绿地中央广场C3地块B栋大堂</span>
              <span class="price">￥329</span>
            </div>
          </li>
            <li>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554547281554&di=ca09bb1d478c1c7a0610106123e5f405&imgtype=0&src=http%3A%2F%2Fimage.qmango.com%2Fhotelimg%2Fc2%2F203939%2F%25E5%258F%258C%25E4%25BA%25BA%25E5%25AE%25A2%25E6%2588%25BF1_%25E7%259C%258B%25E5%259B%25BE%25E7%258E%258B.jpg"/>
            <div class="describe">
            <span class="title">济南绿地美利亚酒店</span>
              <span class="address">齐州路2477号(济南西站东广场)</span>
              <span class="price">￥459</span>
            </div>
          </li>
      </ul>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
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
  name: 'impression',
  data () {
    return {
      page: 1
    }
  },
  mounted () {
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
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
  .content {
    background-color:#f1f1f1;
    .Promotional-language {
      padding-top: 10px;
      text-align: center;
      p {
        padding-left: 395px;
      }
    }
    .hotel-warpper{
      width: 1024px;
      margin: 0 auto;
      ul{
        li{
          display:flex;
          list-style:none;
          background-color:#fff;
          margin:10px 0;
          padding: 10px 15px;
          img{
            width:170px;
            height:120px;
          }
          .describe{
          display:flex;
          flex-direction:column;
          padding-left:50px;
          span{
            padding-bottom:9px;
          }
          .title{
            font-size:25px;
          }
          .price{
            font-size:20px;
            color:red;
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
