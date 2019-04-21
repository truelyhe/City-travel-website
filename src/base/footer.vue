<template>
  <div class="footer-warpper">
    <div class="foot_name">
      <h5>Copyright © 2019   鲁ICP备19000708号</h5>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  mounted: function () {
  }
}
</script>

<style>
  .footer-warpper {
    overflow: hidden;
    /* width: 960px; */
    text-align: center;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    .footer-warpper {
      display: none;
    }
  }

  .footer-warpper a:hover {
    color: #222;
    background: #f5f7f9;
  }

  .foot_name {
    background: #409EFF;
    color: white;
    padding: 5px 0;
  }

  nav {
    background: white;
    padding: 20px 0;
  }

  .nav {
    padding: 8px 20px;
    text-align: left;
  }

  .info {
    margin-top: 10px;
    padding: 20px;
    background: white;
  }

  .info_name {
    font-weight: 600;
    padding: 5px;
  }

  .info img {
    width: 120px;
    height: 120px;
  }

  .archive {
    padding-top: 20px;
  }

  .archive .archive_count {
    display: block;
    color: #222;
    font-weight: 600;
    font-size: 16px;
  }

  .archive .archive_name {
    display: block;
    color: #999;
    font-size: 14px;
  }

  .communication {
    padding-top: 20px;
  }

  .communication_item {
    display: inline-block;
    width: 40%;
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
  }
</style>
