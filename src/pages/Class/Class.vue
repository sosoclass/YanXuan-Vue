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
          <li class="item" v-for="(list,index) in categoryL1List" :key="index">
            <a href="javescript:;" class="txt">{{list.name}}</a>
          </li>

        </ul>
        <div class="m-subCateList">
          <div class="banner">
            <div class="cnt"></div>
          </div>
          <div class="cateList">
            <ul class="list">
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png?imageView&quality=85&thumbnail=144x144" alt="" class="cateImg">
                  </div>
                  <div class="name"></div>
                </a>
              </li>
            </ul>
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
        width: 100%;
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
              line-height: .86667rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
      .m-subCateList
        margin-left: 2.16rem;
        padding: .4rem .4rem .28rem;
        position absolute
        top: 0
        bottom: 0
        width 100%
        .banner
          position: relative;
          width: 100%;
          height: 2.56rem;
          display: table;
          margin-bottom: .42667rem;
          background: center no-repeat #f4f4f4;
          background-size: cover;
          border-radius: 4px;
          .cnt
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            font-size: .37333rem;
            color: #fff;
        .cateList

          .list
            .cateItem
              display: inline-block;
              margin-right: .45333rem;
              font-size: 0;
              width: 1.92rem;
              vertical-align: top;
              >a
                .cateImgWrapper
                  width: 1.92rem;
                  height: 1.92rem;
                  >img
                    display: block;
                    width: 100%;
                    background: #fff;
                    height: 100%;
                .name
                  height: .96rem;
                  font-size: .32rem;
                  text-align: center;
                  line-height: .48rem;
                  display: block;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
</style>
