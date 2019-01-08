<template>
  <div class="g-bd">
    <div class="m-hd ">
      <div class="m-topBar">
        <div class="bd">
          <div class="row">
            <a href="javascript:;" class="iconfont icon-shouye" @click="$router.replace('/')"></a>
            <a href="" class="img">
              <img src="./images/icon-yanxuan.png" alt="">
            </a>
            <div class="right" >
              <a href="" class="search" @click="$router.push('/search')">
                <i class="iconfont icon-search"></i>
              </a>
              <a href=""  class="cart" @click="$router.replace('/shopcart')">
                <i class="iconfont icon-gouwuche"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Router-view/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Phone from './phone.vue'
  import LoninTemple from '../../components/LoginTemple/LoninTemple.vue'
  export default {
    compenent:{
      Phone,
      LoninTemple
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .g-bd
    height: 100%;
    .m-hd
      position: fixed!important;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      bottom-border-1px(#eee)
      .m-topBar
        position: relative;
        .bd
          height: 100%;
          background-color: #fafafa;
          .row
            z-index: 1;
            width: 100%;
            margin: auto;
            overflow: hidden;
            position: relative;
            line-height 2rem
            height: 2rem;
            font-size 1rem
            .icon-shouye
              width: .2rem;
              height: .2rem;
              font-size 1rem
              color #333
              margin-left 10px
            .img
              text-align: center
              img
                position absolute
                top: 0
                right 0
                bottom: 0
                left: 0
                margin auto
                width: 3.4rem;
                height: 1rem;
          .right
            float right
            margin-left: auto;
            margin-right: .5rem;
            .search
              .icon-search
                font-size 1rem
                color #333
            .cart
              padding-left 10px
              .icon-gouwuche
                font-size 1rem
                color #333

</style>
