import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from "./store/index.js";

import filters  from './filters/filters.js'
Vue.use(filters);

Vue.prototype.$center = new Vue();


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
