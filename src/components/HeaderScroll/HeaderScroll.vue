<template>
  <div class="header-title ">
    <div class="left">
      <div class="page-hot">
        <span class="page-hot-title on"  >推荐</span>
      </div>
      <div class="page-home">
        <span class="page-home-title">居家</span>
      </div>
      <div class="page-shoes">
        <span class="page-shoes-title">鞋包配饰</span>
      </div>
      <div class="page-clothes">
        <span class="page-clothes-title">服装</span>
      </div>
      <div class="page-electrical">
        <span class="page-electrical-title">电器</span>
      </div>
    </div>
    <div class="more">
      <div class="iconfont icon-jiantou8 flag">
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
//    mounted(){
//      let scroll = new BScroll('.header-title',{
//        scrollX: true,
//        click: true
//      })
//    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-title
    display flex
    padding: 0 .4rem;
    background: #fff;
    margin-top 5px
    overflow hidden
    width 100%
    margin-bottom .1rem
    >div
      display flex
    .left
      flex 1
      .page-hot
        .page-hot-title
        &.on
          color #b4282d
          border-bottom 1.5px solid #b4282d;
      > div
        position: relative;
        display: flex;
        padding: 0 .21333rem;
        line-height: .8rem;
        font-size: .57333rem;
        color: #333;
        width 16%
        text-align: center
        > span
          width 100%
          text-align: center
          color: #333;
    .more
      width .8rem
      margin-right .8rem
      .flag
        width 2px
</style>
