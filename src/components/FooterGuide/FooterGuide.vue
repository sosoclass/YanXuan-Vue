<template>
  <footer class="footer_guide border-1px" :class="{none:$route.path.includes('/profile')}">
        <span href="javascript:;" class="guide_item"  @click="handleClick('/msite')" :class="{on:$route.path.includes('/msite')}">
            <span class="item_icon">
                <i class="iconfont icon_msite icon-shouye"></i>
            </span>
            <span>首页</span>
        </span>
    <span href="javascript:;" class="guide_item" @click="handleClick('/class')" :class="{on:$route.path.includes('/class')}">
            <span class="item_icon">
                <i class="iconfont icon_class icon-liebiaofenlei"></i>
            </span>
            <span>分类</span>
            </span>
    <span href="javascript:;" class="guide_item"  @click="handleClick('/shiwu')" :class="{on:$route.path.includes('/shiwu')}">
            <span class="item_icon">
                <i class="iconfont icon_shiwu icon-tupian" ></i>
            </span>
            <span>识物</span>
        </span>
    <span href="javascript:;" class="guide_item"  @click="handleClick('/shopcart')" :class="{on:$route.path.includes('/shopcart')}">
            <span class="item_icon">
                <i class="iconfont icon_shopcart icon-gouwuche"></i>
            </span>
            <span>购物车</span>
        </span>
    <span href="javascript:;" class="guide_item" @click="handleClick('/profile')" :class="{on:$route.path.includes('/profile')}">
            <span class="item_icon">
                <i class="iconfont icon_profile icon-geren"></i>
            </span>
            <span>我的</span>
        </span>
  </footer>
</template>

<script>
  export default {
    methods: {
      handleClick(path) {
        this.$router.replace(path);
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl';

  .footer_guide
    top-border-1px(#e4e4e4);
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    height: 1.97rem;
    display: flex;
    .guide_item
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;
      align-items: center;
      color: #666;
      &.on
        color #b4282d
      span
        font-size: 0.54rem;
        margin-bottom: 0.22rem;
        .iconfont
          margin-top: 0.22rem;
          display: block;
          width: 0.76rem;
          height: 0.76rem;
          font-weight 700




    &.none
      display none
</style>
