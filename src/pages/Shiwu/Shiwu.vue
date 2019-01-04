<template>
  <div class="shiwu ">
    <div class="fixed">
      <div class="psc-m-topbar">
        <div class="psc-row">
          <div class="psc-m-hamburger">
            <a href="javascript:;" class="psc-u-nav-link" @click="$router.replace('/msite')">
              <i class="iconfont icon-shouye"></i>
            </a>
          </div>
          <div class="m-head-tab">
            <a href="javascript:;" class="item on">发现</a>
            <a href="javascript:;" class="item">甄选家</a>
          </div>
          <div class="psc-m-right">

            <a href="javascript:;" class="psc-u-link-cart"  @click="$router.replace('/shopcart')">
              <i class="iconfont icon-gouwuche"></i>
            </a>
            <a href="javascript:;" class="psc-u-link-search">
              <i class="iconfont icon-search"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="m-main-tab">
        <div class="u-scroll-wrapper">
          <a href="javascript:;" :class="{move: $route.path==='/shiwu/hot'}" @click="goTo('/shiwu/hot')">推荐</a>
          <a href="javascript:;" :class="{move: $route.path==='/shiwu/daren'}" @click="goTo('/shiwu/daren')">达人</a>
          <a href="javascript:;" :class="{move: $route.path==='/shiwu/new'}" @click="goTo('/shiwu/new')">上新</a>
          <a href="javascript:;" :class="{move: $route.path==='/shiwu/order'}" @click="goTo('/shiwu/order')">晒单</a>
          <a href="javascript:;" :class="{move: $route.path==='/shiwu/home'}" @click="goTo('/shiwu/home')">HOME</a>
        </div>

      </div>
    </div>
    <router-view/>

  </div>

</template>

<script>
  import Daren from '../../components/ShiwuPage/daren.vue'
  import Home from '../../components/ShiwuPage/home.vue'
  import Hot from '../../components/ShiwuPage/hot.vue'
  import Order from '../../components/ShiwuPage/order.vue'
  import New from '../../components/ShiwuPage/new.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

    computed:{
      ...mapState(['data'])
    },
    mounted(){
      this.$store.dispatch('reqgettabs',()=>{
        new BScroll('.wrapper',{
          scrollY:true,
          click: true
        })
      })

    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    },
    components:{
      Daren,
      Home,
      Hot,
      Order,
      New
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins";
  .shiwu
    height 100%
    .fixed
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      .psc-m-topbar
        margin-top
        position: relative;
        height: 2rem;
        background-color: #fafafa;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: .01rem solid #d9d9d9;
        .psc-row
          z-index: 1;
          max-width: 768px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          margin: auto;
          overflow: hidden;
          padding: 0 .52rem 0 .48rem;
          position: relative;
          .psc-m-hamburger
            display: block;
            float: left;
            line-height 2rem
            .psc-u-nav-link
              display: block;
              height: 2rem;
              > i
                font-size 1rem
          .m-head-tab
            position: absolute;
            width: 5.2rem;
            height: 100%;
            line-height: 2rem;
            text-align: center;
            left: 50%;
            top: 0;
            margin-left: -2.6rem;
            color: #7F7F7F;
            z-index: 1;
            .item
              padding: 0 .16rem;
              vertical-align: middle;
              font-size: .6rem;
              &.on
                color: #b4282d;
                font-size: .9rem;
                font-weight: bold;
          .psc-m-right
            display: block;
            float: right;
            height: 2rem;
            margin-right: .3rem;
            line-height 2rem
            .psc-u-link-search
              float: right;
              display: block;
              height: 1rem;
              margin-right: .7rem;
              > i
                font-size 1rem
            .psc-u-link-cart
              float: right;

              display: block;
              height: 1rem;
              > i
                font-size 1rem

      .m-main-tab
        width: 100%;
        height: 1.52rem;
        background: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        position: fixed;
        top: 2rem;
        left: 0;
        z-index: 20;
        .u-scroll-wrapper
          display flex
          height: 1.52rem;
          line-height: 1.52rem;
          >a
            flex 1
            text-align: center
            box-sizing: border-box;
            font-size: .56rem;
            color: #7F7F7F;
            margin: 0 .8rem;
            vertical-align: middle;
            &.move
              color: #b4282d;
              border-bottom 2px solid #b4282d


</style>
