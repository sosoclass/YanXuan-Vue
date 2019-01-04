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
            <div class="right">
              <a href="" class="search">
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
    <div class="loginTypesWrap">
      <div class="cont">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="u-button">
            <i class="iconfont icon-shoujihaoma"></i>
            <span>手机号码登录</span>
          </div>
          <div class="d-button">
            <i class="iconfont icon-youjian"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </div>
      </div>
      <div class="thirdWrap">
        <div class="itemWrap">
          <span class="item">
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </span>
          <span class="item">
            <i class="iconfont icon-QQ"></i>
            <span>QQ</span>
          </span>
          <span class="item last">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
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
    .loginTypesWrap
      position: relative;
      height: 100%;
      background: #F2F5F4;
      .cont
        .logoWrap
          text-align: center;
          padding-top: 5.1rem;
          padding-bottom: 2.13333rem;
          img
            width: 5.5rem;
            height: 1.9rem;
        .btnWrap
          margin-top 20px
          padding: 0 .7rem;
          margin-bottom: 2.73333rem;
          .u-button
            margin-bottom: .6rem;
            border-radius: 2px;
            height: 2rem;
            line-height: 2rem;
            font-size: .6rem;
            color: #fff;
            border: 1px solid #b4282d;
            background-color: #b4282d;
            text-align: center
            i
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem;
              font-size 1rem
              line-height 1rem
              vertical-align middle
            span
              line-height: 1.25333rem;
          .d-button
            margin-bottom: .6rem;
            border-radius: 2px;
            height: 2rem;
            line-height: 2rem;
            font-size: .6rem;
            color: #b4282d;
            border: 1px solid #b4282d;
            background-color: #F2F5F4;
            text-align: center
            i
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem;
              font-size .8rem
              line-height .8rem
              vertical-align middle
            span
              line-height: 1.25333rem;
          .btn
            color: #333;
            font-size: .37333rem;
            text-align: center;
            width: 100%;
            span
              color: #333;
              font-size: .6rem;
              text-align: center;
            i
              margin-right: .21333rem;
              position: relative;
              top: -.02667rem;

      .thirdWrap
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 2.5rem;
        height: 1rem;
        text-align: center;
        .itemWrap
          text-align: center;
          padding: 0 .53333rem;
          height: 1rem;
          display flex
          width 80%
          margin-left  25px
          .item
            flex 1
            border-right: 1px solid #979797;
            height: 1rem;
            position: relative;

            &.last
              border-right none
            .iconfont
              position: relative;
              top: .13333rem;
              display: inline-block;
              font-size .8rem
              color: #7F7F7F;
              vertical-align top
            span
              line-height: 1rem;
              height: .53333rem;
              color: #7F7F7F;
              margin-left: .06667rem;
              font-size .6rem
              vertical-align top
</style>
