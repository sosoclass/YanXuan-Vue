/**
 * Created by 93659 on 2018/12/28.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Class from '../pages/Class/Class.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import ProFile from '../pages/ProFile/ProFile.vue'

Vue.use(Router);

export default [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/class',
      component: Class
    },
    {
      path: '/profile',
      component: ProFile
    },
    {
      path: '/shiwu',
      component: Shiwu
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]

