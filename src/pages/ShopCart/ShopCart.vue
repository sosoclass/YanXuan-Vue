<template>
  <div class="page-shopcart ">
    <div class="fix">
      <div class="nav-header ">
        <span class="logo">购物车</span>
        <div class="right">
          <a href="">
            <span>领券</span>
          </a>
        </div>
      </div>

    </div>
    <div class="promise">
      <ul class="m-servicePolicy">
        <li class="item">
          <i class="iconfont icon-circle"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="iconfont icon-circle"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <i class="iconfont icon-circle"></i>
          <span>满88元免邮费</span>
        </li>

      </ul>
    </div>
    <div class="m-defaultPage">
      <div class="container">
        <div class="img"></div>
        <div class="txt">
          <div class="noCart-login">
            <div class="noCart-title">去添加点什么吧</div>
            <div class="noCart-btn">登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .page-shopcart
    height: 100%;
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
        height: 1.8rem;
        padding: 0 .4rem;
        line-height: 1.8rem;
        text-align: center;
        position: relative;
        .logo
          display: inline-block;
          font-size: .8rem;
          line-height: 1.17333rem;
          text-align: center;
        .right
          position: absolute;
          top: 0;
          right: 1rem;
          font-size: .6rem;
          a
            position: relative;
            color: #B4282D;

    .promise
      padding-top 1.8rem
      .m-servicePolicy
        position: relative;
        z-index: 1;
        padding: .5rem .6rem;
        background: #f4f4f4;
        display flex
        .item
          flex 1
          font-size: .5rem;
          color: #666;
          text-align: center
          i
            font-size .1rem
    .m-defaultPage
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      background-color: #f4f4f4;
      text-align: center;
      .container
        position: absolute;
        top: -3rem;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4rem;
        margin: auto;
        .img
          display: inline-block;
          vertical-align: middle;
          width: 5.2rem;
          height: 5.2rem;
          margin-bottom: .2rem;
          background-size: 5.2rem 5.2rem;
          background-position: center center;
          background-repeat: no-repeat;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
        .txt
          font-size: .37333rem;
          line-height: 1;
          color: #7f7f7f;
          .noCart-login
            margin-top: -.26667rem;
            .noCart-title
              margin-bottom: .8rem;
              line-height: 1;
              font-size: .6rem;
              color: #999;
            .noCart-btn
              margin: auto;
              width: 10rem;
              height: 2rem;
              font-size: .6rem;
              line-height: 2rem;
              color: #fff;
              background-color: #b4282d;
              border-radius: .1rem;
</style>
