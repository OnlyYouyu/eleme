import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from "../pages/home/index.vue";
import Find from "../pages/find/index.vue";
import Order from "../pages/order/index.vue";
import Mine from "../pages/mine/index.vue";
import Search from "../components/home/Search/homeSearch.vue";
import AddressPage from "../components/home/addressPage/AddressPage.vue";
export default new Router({
  routes: [
    {
      path:'/home',
      alias:'/',
      name:'home',
      component:Home,
    },
    {
      path:'/find',
      name:'find',
      component:Find
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/addresspage',
      name: 'addresspage',
      component: AddressPage
    }
  ]
})
