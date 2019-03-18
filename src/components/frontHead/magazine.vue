<template>
  <div class="content">
    <Header/>
    <!-- <div><input class="input" type="text" value="" placeholder="分享下你的旅游干货吧~~~"></div> -->
    <Footer/>
  </div>
</template>
<script type="text/ecmascript-6">
import Header from '@/base/header'
import Footer from '@/base/footer'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style>
.input{
  border: 1px solid #000;
  width:1000px;
  height:150px;
  border-radius: 20px;
}
</style>
