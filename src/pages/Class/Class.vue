<template>
  <div class="fenlei">
    <div class="hdWraper">
      <div class="m-hd">
        <div class="m-itemCateListHd">
          <div class="m-topSearchIpt">
            <i class="header-input-icon iconfont icon-search"></i>
            <span class="placeholder" >搜索商品, 共20229款好物</span>
          </div>
        </div>
      </div>
    </div>
    <div class="m-cateNavVertWrap">
      <div class="m-cateNavVertWrap-space">
        <ul class="m-cateNavVert">
          <li class="item on" v-for="(list,index) in categoryL1List" :key="index">
            <a href="javescript:;" class="txt">{{list.name}}</a>
          </li>

        </ul>

      </div>
    </div>
    <div class="m-subCateList">
      <div class="banner">
        <div class="cnt" >
          <img src="http://yanxuan.nosdn.127.net/8f6643db675acace2420594545c3a180.jpg?imageView&thumbnail=0x196&quality=75" alt="">
        </div>
      </div>
      <div class="cateList">
        <ul class="list">
          <li class="cateItem " v-for="(item,index) in currentCategory.subCateList" :key="index">
            <a href="javascript:;">
              <div class="cateImgWrapper">
                <img :src="item.bannerUrl" alt="" class="cateImg">
              </div>
              <div class="name">{{item.name}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['currentCategory','categoryL1List'])
    },
    mounted(){
      this.$store.dispatch('reqcurrentCategory');
      this.$store.dispatch('reqCategoryL1List');
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins";
  .fenlei
    .hdWraper
      height: 1.8rem;
      .m-hd
        position: fixed!important;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        .m-itemCateListHd
          align-items: center;
          height: 2.17333rem;
          padding: 0 .4rem;
          background-color: #fff;
          position: relative;
          display: flex;
          bottom-border-1px(#eee)
          .m-topSearchIpt
            justify-content: center;
            width 100%
            height: 1.34667rem;
            font-size: .6rem;
            background-color: #ededed;
            border-radius: .10667rem;
            line-height 1.34667rem
            text-align: center
            .header-input-icon
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .37333rem;
              height: .37333rem;
              margin-right: .13333rem;
            .placeholder
              color: #666;
    .m-cateNavVertWrap
      left: 0;
      top: 2.17333rem;
      position: fixed;
      z-index: 4;
      width: 3.5rem;
      background-color: #fff;
      border-right  1px solid #eee
      .m-cateNavVertWrap-space
        position: relative;
        height: 100%;
        overflow: hidden;
        .m-cateNavVert
          transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
          transition-duration: 0ms;
          transform: translate(0px, -94.4px) translateZ(0px);

          margin-top 115px
          .item
            width: 100%;
            height: 1.66667rem;
            text-align: center;
            border: none;
            margin-bottom 10px

            .txt
              color #333;
              display: block;
              font-size: .6rem;
              line-height 1.66667rem
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;


    .m-subCateList
        margin-left: 3.16rem;
        padding: .5rem .5rem .8rem 1rem;
        position absolute
        top: 2.17333rem;
        bottom: 0
        .banner
          position: relative;
          width: 100%;
          height: 3.56rem;
          display: table;
          margin-bottom: .42667rem;
          background: center no-repeat #f4f4f4;
          background-size: cover;
          .cnt
            color: #fff;
            img
              width 100%
              border-radius: 2px;
        .cateList
          width 100%
          margin-bottom 50px
          clearFix()
          .list
            width 100%
            clearFix()
            .cateItem
              display: inline-block;
              margin-right: .1rem;
              font-size: 0;
              width: 3.5rem;
              vertical-align: top;
              >a
                .cateImgWrapper
                  width: 3.2rem;
                  height: 3.2rem;
                  >img
                    display: block;
                    width: 100%;
                    background: #fff;
                    height: 100%;
                .name
                  height: 1.2rem;
                  font-size: .52rem;
                  text-align: center;
                  display: block;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  color #333
</style>
