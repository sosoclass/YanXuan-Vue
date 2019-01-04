<template>
  <div class="toogle">
    <div class="header-title">
      <div class="left">
        <div class="page-hot" >
          <span class="page-hot-title " :class="{active:curIndex===index}" v-for="(kingKon,index) in kingKongModule.kingKongList" :key="index" @click="curIndex=index">{{kingKon.text}}</span>
        </div>

      </div>
      <div class="more" @click="isShow =!isShow">
        <div class="iconfont icon-jiantou8 flag">
        </div>
      </div>
    </div>
    <div class="m-indexHd withMask" v-show="isShow">
      <div class="nav-header ">
        <a href="javascript:;" class="header-link">
          <img src="./images/icon-yanxuan.png" alt="yanxuan" class="header-img">
          <div class="header-input">
            <span class="header-input-icon iconfont icon-search"></span>
            <span class="placeholder">搜索商品，共xxxx件好货</span>
          </div>

        </a>
      </div>
      <div class="tabWrap">
        <div class="tabAlter">全部频道</div>
        <div class="toggleWrap">
          <div class="linear"></div>
          <div class="toggle toggleActive" @click="isShow=false">
            <div class="iconfont icon-jiantou8-copy"></div>
          </div>
        </div>
        <div class="moreCate">

          <div class="cateTag" :class="{cateTagactive:curIndex==index}" v-for="(kingKon,index) in kingKongModule.kingKongList" :key="index" @click="curIndex=index">{{kingKon.text}}</div>

        </div>
      </div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        isShow: false,
        isActive:false,
        curIndex:0
      }
    },
    computed:{
      ...mapState(['kingKongModule']),
      toogleActive(){
        isActive=true
      }
    },
    methods: {},
    mounted(){
      this.$store.dispatch('reqkingKongModule',()=>{
        new BScroll('.page-hot', {
          scrollX: true,
          click: true
        })
      })

    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-title
    display flex
    padding: 0 .4rem;
    background: #fff;
    margin-top 5px
    overflow hidden
    margin-bottom .1rem
    width 1000px
    white-space nowrap
    position relative
    .left
      width 100%
      overflow hidden
      > div
        position: relative;
        float left
        display: flex;
        margin-left: .5rem;
        line-height: .8rem;
        font-size: .57333rem;
        color: #333;
        text-align: center
        > span
          display inline-block
          padding: 0 .4rem;
          width 100%
          text-align: center
          color: #333;
          &.active
            color #b4282d
            border-bottom 1.5px solid #b4282d;
    .more
      background white
      width 3rem
      position absolute
      top: 0
      left: 330px
      .flag
        width 2px

  .m-indexHd
    position fixed
    top: 0
    left: 0
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

    .tabWrap
      position: relative;
      z-index: 2;
      background: #fff;
      margin-top: -.01rem;
      padding-top 5px
      padding-bottom 10px
      .tabAlter
        height: .8rem;
        line-height: .8rem;
        padding-left: .8rem;
        font-size: .6rem;
      .toggleWrap
        display: flex;
        position relative
        .linear
          width: .8rem;
          height: .8rem;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
        .toggle
          width: 1.33333rem;
          height: .8rem;
          text-align: center;
          background: #fff;
          position absolute
          top: -.5rem
          right: .5rem
          .icon
            margin-top: .2rem;
            display: inline-block;
            vertical-align: middle;
            width: .4rem;
            height: .4rem;
      .moreCate

        overflow: hidden;
        .cateTag
          width: 3rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          float: left;
          margin-bottom: .7rem;
          margin-left: .7rem;
          background: #FAFAFA;
          border: 1px solid #CCC;
          border-radius: .05333rem;
          font-size .5rem
          &.cateTagactive
            border: 1px solid #b4282d;
            color: #b4282d;
    .mask
      position: fixed;
      z-index: 1;
      background: rgba(0, 0, 0, .5);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
</style>
