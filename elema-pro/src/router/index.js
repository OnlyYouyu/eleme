import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Full from '../components/home/shopFull.vue'


export default new Router({
  routes: [
   {
    path: '/full',
    name: 'full',
    component: Full
   }
  ]
})
