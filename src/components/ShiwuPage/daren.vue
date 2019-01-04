<template>
  <div class="hot wrapper">

    <div>
      <div class="m-main-content" v-for="(item,index) in result" :key="index">
        <div class="m-tpls wrapper"  v-for="(topic,index) in item.topics" v-if="topic.style!==4">
          <a href="javascript:;">
            <div class="info">
              <div class="u-name">
          <span class="ava">
            <img :src="topic.avatar" alt="avatar" >
          </span>
                <span>{{topic.nickname}}</span>
              </div>
              <div class="title">{{topic.title}}</div>
              <div class="desc">{{topic.subTitle}}</div>
              <div class="u-rcount">
                <i class="icon iconfont icon-guankan1"></i>
                <span>{{topic.readCount}}人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img :src="topic.picUrl" alt="">
            </div>
          </a>
        </div>
      </div>

      <Fenge/>

    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['data','result'])
    },
    mounted(){
      this.$store.dispatch('reqgettabs')
      this.$store.dispatch('reqrecAuto',()=>{
        new BScroll('.wrapper', {
          scrollY: true,
          click: true,
          bounce:false
        })
      })

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .hot
    height 100%
    padding: 0  0 .98rem 0;
    margin-top 3.5rem
    box-sizing border-box
    .m-tpls
      position: relative;
      border-top 10px solid #f4f4f4
      padding: .32rem .3rem;
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      > a
        display: flex;
        margin-top 10px
        margin-left 5px
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        .info
          width: 9rem;
          .u-name
            font-size: .28rem;
            color: #333;
            line-height: .36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .ava
              width: 1.25rem;
              height: 1.25rem;
              display block
              overflow: hidden;
              border-radius: 50%;
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
            width: 100%;
            font-size: .72rem;
            color: #333;
            line-height: .8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            padding-top: .64rem;
            font-family: PingFangSC-Regular;
          .desc
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .65rem;
            line-height: .8rem;
            padding-top: .3rem;
            color: #7f7f7f;
          .u-rcount
            position: absolute;
            left: .5rem;
            bottom: 0.4rem;
            font-size: .3rem;
            color: #999;
            line-height: .32rem;
            .icon-guankan01
              width: .5rem;
              height: .5rem;
              line-height .5rem
              vertical-align top
            span
              font-size: .52rem;
              color: #999;
              line-height .5rem
              vertical-align bottom

        .u-pic
          width: 6rem;
          height: 6 rem;
          position: relative;
          overflow: hidden;
          border-radius: .08rem;
          img
            width: 100%;
            height: 100%;
            border-radius 4px
</style>
