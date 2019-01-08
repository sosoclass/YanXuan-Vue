<template>
  <div class="m-main-content">
    <div>
      <div v-for="(list,index) in result" :key="index">
        <div class="m-tpls" v-for="(list,index) in list.topics" :key="index" v-if="list.style===3">
          <a href="">
            <div class="title">{{list.title}}</div>
            <div class="content">{{list.subTitle}}</div>
          </a>
          <ul class="m-gplist" >
            <li class="items"v-for="(pic,index) in list.itemList" :key="index">
              <img :src="pic.itemUrl" alt="">
            </li>
          </ul>
          <div class="u-rcount">
            <i class="icon iconfont icon-guankan1"></i>
            <span>{{list.readCount}}人看过</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['result'])


    },
    mounted(){
      this.$store.dispatch('reqrecAuto',()=>{
        new BScroll('.m-main-content',{
          scrollY:true,
          click:true,
          bounce:false
        })
      })

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m-main-content
    padding: 0 0 .98rem 0;
    margin-top 3.5rem
    box-sizing border-box
    height 100%
    .m-tpls
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: .7rem .6rem;
      border-top 10px solid #f4f4f4
      > a
        .title
          width: 100%;
          color: #333;
          font-size: .72rem;
          line-height: 1.08rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        .content
          font-size: .56rem;
          color: #7F7F7F;
          line-height: .8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          padding-top: .08rem;
      .m-gplist
        justify-content: space-between;
        margin: .1rem 0;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        display: flex;
        .items
          float left
          width: 3.6rem;
          height: 3.6rem;
          border-radius: .1rem;
          overflow: hidden;
          background: #f4f4f4;
          margin-bottom: .16rem;
          margin-right .01rem
          img
            width: 100%;
            height: 100%;
            display block
      .u-rcount
        font-size: 2rem;
        color: #999;
        line-height: .6rem;
        margin-top: .18rem;
        margin-bottom: -.16rem;
        .icon-guankan01
          width: .2rem;
          height: .2rem;
          line-height .2rem
          vertical-align top
        span
          font-size: .42rem;
          color: #999;
          line-height .7rem
          vertical-align bottom


</style>
