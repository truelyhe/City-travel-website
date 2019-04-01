<template>
  <div class="content">
    <Header :switchIndex="4"/>
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
              <span class="price">￥150</span>
            </div>
          </li>
           <li>
            <img src="@/assets/hotel/hotel1.jpg"/>
            <div class="describe">
            <span class="title">泉城印象·精品公寓酒店</span>
              <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
              <span class="price">￥150</span>
            </div>
          </li>
           <li>
            <img src="@/assets/hotel/hotel1.jpg"/>
            <div class="describe">
            <span class="title">泉城印象·精品公寓酒店</span>
              <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
              <span class="price">￥150</span>
            </div>
          </li>
           <li>
            <img src="@/assets/hotel/hotel1.jpg"/>
            <div class="describe">
            <span class="title">泉城印象·精品公寓酒店</span>
              <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
              <span class="price">￥150</span>
            </div>
          </li>
        </ul>
        <ul v-if="page === 2">
          <li>
            <img src="@/assets/hotel/hotel1.jpg"/>
            <div class="describe">
            <span class="title">济南·精品公寓酒店</span>
              <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
              <span class="price">￥180</span>
            </div>
          </li>
            <li>
            <img src="@/assets/hotel/hotel1.jpg"/>
            <div class="describe">
            <span class="title">泉城印象·精品公寓酒店</span>
              <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
              <span class="price">￥180</span>
            </div>
          </li>
            <li>
            <img src="@/assets/hotel/hotel1.jpg"/>
            <div class="describe">
            <span class="title">泉城印象·精品公寓酒店</span>
              <span class="address">历城区唐冶西路868号山东设计创意产业园北区A1-1栋1711房</span>
              <span class="price">￥180</span>
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
    .Promotional-language {
      padding-top: 10px;
      text-align: center;
      p {
        padding-left: 395px;
      }
    }
    .hotel-warpper{
      padding:0 100px;
      ul{
        li{
          display:flex;
          list-style:none;
          background-color:#f1f1f1;
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
