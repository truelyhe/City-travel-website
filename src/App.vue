<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  created () {
  },
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'iconfont';  /* project id 1154308 */
  src: url('//at.alicdn.com/t/font_1154308_zg9aru3bhwd.eot');
  src: url('//at.alicdn.com/t/font_1154308_zg9aru3bhwd.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1154308_zg9aru3bhwd.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1154308_zg9aru3bhwd.woff') format('woff'),
  url('//at.alicdn.com/t/font_1154308_zg9aru3bhwd.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1154308_zg9aru3bhwd.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
