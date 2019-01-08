<template>
    <div class="loginTypesWrap">
      <div class="cont">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="u-button" @click="$router.replace('/profile/phone')">
            <i class="iconfont icon-shoujihaoma"></i>
            <span>手机号码登录</span>
          </div>
          <div class="d-button" @click="$router.replace('/profile/email')">
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
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
