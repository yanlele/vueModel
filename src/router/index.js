import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/index'
import Login from '@/components/Home/login'
import Regist from '@/components/Home/regist'
import flexBox from '@/components/Home/FlexBox'
import father from '@/components/props/father'
import child from '@/components/props/child'
import other from '@/components/props/other'
import page from '@/components/mixin/page'
import sendCode from '@/components/ydui/sendCode'
import lottery from '@/components/lottery'

import buyHome from '@/components/buyCars/home'
import register from '@/components/buyCars/register'

import test1 from '@/components/test/test1'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/index',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/regist',
      component:Regist
    },
    {
      path:'/flexBox',
      component:flexBox
    },
    {
      path:'/father',
      component:father,
      children:[
        {
          path:'/child',
          component:child
        }
      ]
    },
    {
      path:'/other',
      component:other
    },
    {
      path:'/page',
      component:page
    },

    /*YDUI test*/
    {
      path:'/sendCode',
      component:sendCode
    },

    /*抽奖*/
    {
      path:'/lottery',
      component:lottery
    },

    /*全名抢车项目*/
    {
      path:'/buyHome',
      component:buyHome
    },
    {
      path:'/register',
      component:register
    },

    /*测试页面*/
    {
      path:'/test1',
      component:test1
    }
  ]
})
