import Vue from 'vue'
import App from './App'
import router from './router/index.js'

import filters  from './filters/filters.js'
Vue.use(filters);

Vue.prototype.$center = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
