<template>
  <div class="page-mysite ">
    <div class="fix">
      <div class="nav-header ">
        <a href="javascript:;" class="header-link">
          <img src="./images/icon-yanxuan.png" alt="yanxuan" class="header-img">
          <div class="header-input">
            <span class="header-input-icon iconfont icon-search"></span>
            <span class="placeholder">搜索商品，共xxxx件好货</span>
          </div>

        </a>
      </div>
      <HeaderScroll/>
    </div>


    <div class="msite-banner ">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(list,index) in focusList" :key="index">
            <img :src='list.picUrl' class="swiper-img">
          </div>

        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="promise">
      <div class="promise-item">
        <span class="iconfont icon-xuanzhong"></span>
        <span class="promise-text">网易自营品牌</span>
      </div>
      <div class="promise-item">
        <span class="iconfont icon-xuanzhong"></span>
        <span class="promise-text">30天无忧退货</span>
      </div>
      <div class="promise-item">
        <span class="iconfont icon-xuanzhong"></span>
        <span class="promise-text">48小时快速退货</span>
      </div>

    </div>
    <ul class="class-list">
      <li class="class-list-li" v-for="(kingKon,index) in kingKongModule.kingKongList" :key="index">
          <img :src="kingKon.picUrl" alt="" class="class-content-img">
          <div class="class-content-text" >{{kingKon.text}}</div>
      </li>

    </ul>
    <div class="dinglei">
      <a href="javascript:;" class="dinglei-a">
        <img src="./images/dinglei.png" alt="dinglei">
      </a>
    </div>
    <div class="four-table">
      <a class="GoodRating" href="javascript:;" v-for="(Item,index) in sceneLightShoppingGuideModule" :key="index">
        <div class="text-big" >{{Item.styleItem.title}}</div>
        <div class="text-small" >{{Item.styleItem.title}}</div>
        <div class="images">
          <img :src="url" alt="" v-for="(url,index) in Item.styleItem.picUrlList" :key="index">
        </div>
      </a>

    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
//  const scroll = new BScroll('.wrapper')


  export default {
    computed:{
      ...mapState(['focusList','kingKongModule','sceneLightShoppingGuideModule'])
    },
    mounted(){
      this.$store.dispatch('reqkingKongModule')
      this.$store.dispatch('reqsceneLightShoppingGuideModule')
      this.$store.dispatch('reqBanner',() =>{
        this.$nextTick(() =>{
          new Swiper ('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: {
              delay: 3000,
            }
          })
        })
      })
//      this.$store.dispatch('reqTagList')



    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .page-mysite
    height: 148px;
    position relative
    .fix
      position fixed
      top: 0
      left: 0
      z-index 1000
      width 100%
      background #fff
      .nav-header
        background-color: #fff;
        .header-link
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          background: #fff;
          padding: .21333rem .4rem;
          height 1.333rem
          .header-img
            width: 3rem;
            height: .83333rem;
          .header-input
            display inline-block
            width 90%
            height: 1rem;
            font-size: .37333rem;
            background-color: #ededed;
            border-radius: .10667rem;
            margin-left 6px
            line-height 1rem
            .header-input-icon
              width: 1.37333rem;
              height: 1.37333rem;
              margin-right: .13333rem;
              margin-left 2rem
            .placeholder
              font-size 16px
              color #666

    /*&.on*/
    /*color: #b4282d;*/

    .msite-banner
      margin-top 65.64px
      width 100%
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            .swiper-img
              width 100%
        .swiper-pagination
          .swiper-pagination-bullet
            width: .83333rem;
            height: .05333rem;
            display: inline-block;
            background: #fff;
            opacity: .4;
            border-radius: 0;
          .swiper-pagination-bullet-active
            opacity: 1;
            background: #fff;
            border-radius: 0;


    .promise
      display flex
      width: 100%;
      height: .96rem;
      line-height 1.96rem
      .promise-item
        flex 1
        font-size .52rem
        text-align: center
        .icon-xuanzhong
          font-size .55rem
          color: #B4282D;
        .promise-text
          color: #B4282D;

    .class-list
      height 100%
      margin-top 10px

      .class-list-li
        display: block;
        width: 2.46667rem;
        height: 3.08rem;
        float: left;
        margin: .23333rem .36667rem 0;
        .class-content-img
          width: 2.46667rem;
          height: 2.46667rem;
        .class-content-text
          text-align: center;
          font-size: .5rem;
          line-height: .48rem;
          white-space: nowrap;

    .dinglei
      margin-top 30px
      .dinglei-a
        background white
        margin: -1px 0;
        display: block;
        width: 100%;
        height: 2.13333rem;
        margin-bottom 10px
        img
          width 100%

    .four-table
      overflow: hidden;
      padding: .13333rem .4rem .4rem .34667rem;
      background: #fff;
      margin-bottom: .26667rem;
      margin-top 30px
      margin-left 8px
      >a
        background-color: #F5F5F5;
        display: block;
        width: 6.97333rem;
        height: 4.52rem;
        float: left;
        margin: .1rem 0 0 .06333rem;
        padding: .5rem 0 0 .26667rem;
        background-size: 100% 100%;
        .text-big
          padding-left: .13333rem;
          font-size: .72667rem;
          color: #333333;
        .text-small
          margin-top 5px
          padding-left: .13333rem;
          font-size: .52rem;
          color: #7f7f7f;
        .images
          float: left;
          margin-right: .05333rem;
          >img
            width: 3rem;
            height: 3rem;
            margin-right: .05333rem;
</style>
