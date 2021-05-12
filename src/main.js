/*
Name: Kirsten Wilson
Date: 5/12/21
Assignment: Vue a TV Show
*/

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
