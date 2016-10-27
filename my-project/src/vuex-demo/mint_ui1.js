//--file--- my-project\src\vuex-demo\v01_app.js

import Vue from 'vue'
import App from './mint_ui1v.vue'

import FastClick from 'fastclick'
FastClick.attach(document.body)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
