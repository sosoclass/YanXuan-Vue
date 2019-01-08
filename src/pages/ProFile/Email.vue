<template>
  <div class="loginTypesWrap">
    <div class="cont">
      <div class="logoWrap">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="content">
        <input type="text" placeholder="邮箱账号" v-model="email_code">
        <div class="password">
          <input type="text" placeholder="密码" v-model="email_password">
        </div>
        <div class="info">
          <span class="left">注册账号</span>
          <span class="right">忘记密码</span>
        </div>
      </div>
      <div class="btnWrap">
        <div class="u-button" @click.prevent="login">
          <span>登录</span>
        </div>
        <div class="d-button" @click="$router.push('/profile')">
          <span>其他登录方式</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import {Toast, MessageBox} from 'mint-ui'
  export default {

    data(){
      return{
        email_code:'',
        email_password:''
      }
    },
    computed: {
      isRightEmail(){
        return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.email_code)
      }
    },
    methods:{
      login(){
        //前台验证
        const {email_code,email_password} =this
        if (!this.isRightEmail) {
          return MessageBox.alert('您输入的邮箱账号不正确')
        }
        if (!/^\d{8}$/.test(email_password)) {
          return MessageBox.alert('您输入的密码不正确')
        }
          return Toast('登录成功')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginTypesWrap
    position: relative;
    height: 100%;
    background: #fff;
    .cont
      .logoWrap
        text-align: center;
        padding-top: 3.1rem;
        padding-bottom: 2.13333rem;
        img
          width: 4.1rem;
          height: 1.4rem;
      .content
        margin-left 1rem
        margin-top 1rem
        >input
          width: 95%;
          height: 1.2rem;
          font-size: 0.6rem;
          line-height: 0.6rem;
          margin: 1rem 0;
          padding-left: 0;
          -webkit-tap-highlight-color: transparent;
          outline: none;
          border-bottom: 1px solid #bdbdbd;
        .password
          position: relative;
          left: 0;
          top: 0;
          display: inline-block;
          width: 95%;
          >input
            width: 100%;
            height: 1.2rem;
            font-size: 0.6rem;
            line-height: 0.6rem;
            padding-left: 0;
            -webkit-tap-highlight-color: transparent;
            outline: none;
            border-bottom: 1px solid #bdbdbd;
        .info
          height: 0.6rem;
          line-height: 0.6rem;
          color: #7f7f7f !important;
          font-size: 0.6rem;
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          padding: 1rem 0;
          .left
            line-height: 0.6rem;
            color: #7f7f7f !important;
          .right
            color: #7f7f7f;
            line-height: 0.6rem;
            margin-right 1rem

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
          background-color: #fff;
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



</style>
