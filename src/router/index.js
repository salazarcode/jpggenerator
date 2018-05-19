import Vue from 'vue'
import Router from 'vue-router'
import Banner1 from '@/components/Banner1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Banner1',
      component: Banner1
    }
  ]
})
