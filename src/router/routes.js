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
import Hot from '../components/ShiwuPage/hot.vue'
import Home from '../components/ShiwuPage/home.vue'
import Daren from '../components/ShiwuPage/daren.vue'
import Order from '../components/ShiwuPage/order.vue'
import New from '../components/ShiwuPage/new.vue'


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
      component: Shiwu,
      children:[
        {
          path:'/shiwu/hot',
          component:Hot
        },
        {
          path:'/shiwu/daren',
          component:Daren
        },
        {
          path:'/shiwu/new',
          component:New
        },
        {
          path:'/shiwu/order',
          component:Order
        },
        {
          path:'/shiwu/home',
          component:Home
        },
        {
          path:'',
          redirect:'/shiwu/hot'
        }
      ]
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '',
      redirect: '/msite'
    },
  ]

