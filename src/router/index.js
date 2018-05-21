import Vue from 'vue'
import Router from 'vue-router'
import Banner1 from '@/components/Banner1'
import Screen1 from '@/components/Home'

Vue.use(Router)

export default new Router({

 // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Screen1
    },
    {
      path: '/banner-1',
      name: 'Banner1',
      component: Banner1
    }
  ]
})
