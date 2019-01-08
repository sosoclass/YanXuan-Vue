<template>
  <div class="Search">
    <div class="hdWraper">
      <div class="m-topBar">
        <div class="hd">
          <div class="row">
            <form action="">
              <div class="mipt">
                <i class="iconfont icon-search"></i>
                <input class="ipt" type="text" ref="search" v-model="searchText" :placeholder="searchValue" @focus="isShow=true" @blur="handleBlur" @keydown.13="handleSearch">
              </div>
            </form>
            <span class="cancel" @click="$router.replace('/profile')">取消</span>
          </div>
        </div>
      </div>
      <div class="searchList" v-if="isShow&&searchResult.length>0">
        <ul>
          <li v-for="(result,index) in searchResult" :key="index">
            {{result}}
          </li>
        </ul>
      </div>
      <div class="hotsearch">
        <div class="msearch">
          <header class="hd" v-if="searchInitList.hotKeywordVOList">
            <h3 class="tit">热门搜索</h3>
          </header>
          <nav class="list" v-for="(keyword,index) in searchInitList.hotKeywordVOList" :class="{highlight:keyword.highlight}" :key="index">
            <a :href="keyword.schemeUrl">{{keyword.keyword}}</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data(){
      return {
        searchText:"",
        isShow:false
      }
    },
    computed:{
      ...mapState(['searchResult','searchInitList']),
      searchValue(){
        if(this.searchInitList.defaultKeyword){
          return this.searchInitList.defaultKeyword.keyword;
        }
      }
    },
    methods:{
      handleBlur(){
        this.isShow=false;
        this.$store.dispatch('resetSearchResult')
      },
      handleSearch(){
        let keyword=this.searchText;
        this.$store.dispatch('getSearchGoods',{keyword})
      }
    },
    watch:{
      searchText(){
        this.$store.dispatch('getSearchResult',{keywordPrefix:this.searchText})
      }
    },
    mounted(){
      this.$store.dispatch('getSearchInit');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Search
    background-color: #fff;
    z-index: 1;
    .hdWraper
      height: 3rem;
      .m-topBar
        background-color: #fff;
        z-index: 1;
        height: 2.16rem;
        .hd
          height 100%
          .row
            padding: 0 .3rem;
            z-index: 1;
            height 100%
            width: 90%;
            margin: auto;
            overflow: hidden;
            position: relative;
            display flex
            >form
              flex 1
              margin-top .3rem
              .mipt
                padding-top: 0;
                padding-left: .26667rem;
                padding-bottom: 0;
                border: 0;
                background-color: #f4f4f4;
                height: 1.5rem;
                border-radius: 4px;
                display flex
                align-items: center;
                -webkit-box-pack: justify;
                font-size .6rem
                margin-right 1.5rem
                .icon-search
                  display flex
                  line-height: 1rem;
                  padding:0 .4rem 0 0 ;
                  font-size: .7rem;
                  border: none;
                  color: rgba(0,0,0,.8);
                .ipt
                  width: 80%;
                  height: 100%;
                  background #f4f4f4
                  line-height 1rem
                  outline none
            .cancel
              position: absolute;
              right: 0;
              top: .7rem;
              font-size: 0.6rem;


      .searchList
        width: 100%
        position absolute
        top: .9rem
        z-index 9
        padding 0 .3rem
        ul
          width: 100%
          li
            width: 100%
            height: .8rem
            line-height .8rem
            bottom-border-1px(gray)
            background-color: white
      .hotsearch
        background-color: #f4f4f4;
        position: relative;
        z-index: 1;
        .msearch
          padding: .5rem .65rem .4rem;
          background-color: #fff;
          overflow: hidden;
          margin-bottom: .26667rem;
          .hd
            height: 1.2rem;
            font-size: .6rem;
            color: #999;
            .tit
              font-weight: 400;
          .list
            margin-right: -.4rem;
            margin-bottom: -.42667rem;
            zoom: 1;
            a
              float: left;
              padding: 0 .4rem;
              margin-right: .42667rem;
              margin-bottom: .42667rem;
              line-height: 1rem;
              border: 1px solid #999;
              border-radius: 2px;
              font-size .5rem
            &.active
              border-color: #b4282d;
              color: #b4282d;
</style>
