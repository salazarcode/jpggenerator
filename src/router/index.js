import Vue from 'vue'
import Router from 'vue-router'
import Banner1 from '@/components/Banner1'

import Screen1 from '@/components/Screen1'

Vue.use(Router)

export default new Router({

  mode: 'history',
  routes: [
    {
      path: '/first-step',
      name: 'screen1',
      component: Screen1
    },
    {
      path: '/second-step',
      name: 'Banner1',
      component: Banner1
    }
  ]
})
