import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Params from '@/components/Params'
import phone from '@/components/shop/phone'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: '/Shop/phone',
          name: 'phone',
          component: phone
        }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/b'
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    },
    {
      path: '/toHome',
      redirect: '/'
    },
    {
      path: '/Params/:age/:name',
      name: 'Params',
      component: Params
    },
    {
      path: '/all',
      name: 'all',
      components: {
        default: Home,
        a: Error,
        b: Shop
      }
    },
    {
      path: '*',
      component: Error
    }
  ]
})
