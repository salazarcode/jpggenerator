import Vue from 'vue'
import Router from 'vue-router'
import Banner1 from '@/components/Banner1'
import Banner2 from '@/components/Banner2'
import Banner3 from '@/components/Banner3'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/banner-1',
      name: 'Banner1',
      component: Banner1
    }/*,
    {
      path: '/banner-2',
      name: 'Banner2',
      component: Banner2
    },
    {
      path: '/banner-3',
      name: 'Banner3',
      component: Banner3
    },
    {
      path: '/banner-4',
      name: 'Banner4',
      component: Banner4
    }*/
  ]
})
