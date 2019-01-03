<template>
  <div class="hot wrapper">

    <div class="">
      <div class="m-tpls wrapper" v-for="(item,index) in data" :key="index">
        <a href="javascript:;" v-for="(topic,index) in item.topics" :key="index">
          <div class="u-name">
          <span class="ava" >
            <img :src="topic.avatar" alt="avatar">
          </span>
            <span >{{topic.nickname}}</span>
          </div>
          <div class="title">{{topic.title}}</div>
          <div class="u-pic">
            <img :src="topic.picUrl" alt="">
          </div>
          <div class="u-rcount">
            <i class="icon iconfont icon-guankan1"></i>
            <span>{{`${topic.readCount}人看过`}}</span>
          </div>
        </a>
      </div>
    </div>

    <Fenge/>


  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['data'])
    },
    mounted(){
      this.$store.dispatch('reqgettabs')
      let scroll = new BScroll('.wrapper',{
        scrollY:true,
        click: true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .hot
    padding: 1.52rem 0 .98rem 0;
    .m-tpls
      width: 100%;
      background: #fff;
      margin: 0 0 .6rem 0;
      box-sizing: border-box;
      padding: 0 .6rem 0 .6rem ;
      border-top 10px solid #f4f4f4
      >a
        width: 1.56rem;
        height: 1.56rem;
        .u-name
          font-size: .28rem;
          color: #333;
          line-height: .36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: .24rem;
          .ava
            width: 1.25rem;
            height: 1.25rem;
            display block
            overflow: hidden;
            border-radius:50%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: .01rem solid #d9d9d9;
            margin-right: .32rem;
            img
              width 100%
              height 100%
          span
            float left
            font-size .6rem
            line-height 1.2rem
        .title
          font-size: .78rem;
          height 100%
          color: #333;
          line-height: 1rem;
          margin: -.1.2rem 0 .5rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-family: PingFangSC-Regular;
        .u-pic
          width: 100%;
          height: 100%;
          position: relative;
          margin-bottom: .2rem;
          overflow: hidden;
          border-radius: .08rem;
          margin-top 10px
          img
            width: 100%;
            height: 100%;
            border-radius 4px
        .u-rcount
          font-size: 1rem;
          color: #999;
          line-height: .8rem;
          margin-top: .18rem;
          margin-bottom: -.16rem;
          .icon-guankan01
            width: .5rem;
            height: .5rem;

          span
            font-size: .52rem;
            color: #999;


</style>
