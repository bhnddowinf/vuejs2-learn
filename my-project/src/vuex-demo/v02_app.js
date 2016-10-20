//--file--- my-project\src\vuex-demo\v02_app.js

// import 'babel-polyfill'
import Vue from 'vue'
import Counter from './v02_counter.vue'
import store from './v02_store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})
