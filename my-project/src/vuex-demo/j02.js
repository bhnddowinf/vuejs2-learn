// import 'babel-polyfill'
import Vue from 'vue'
import Counter from './v02_counter.vue'
import store from './j02_store'
import './src/assets/global.css'
// my-project\src\vuex-demo\j02.js

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})

