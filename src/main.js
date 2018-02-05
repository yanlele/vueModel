// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vue_store from './store'
/*import YDUI from 'vue-ydui'

import 'vue-ydui/dist/ydui.px.css'*/
import axios from 'axios'
import 'animate.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import '@/base/mock'
// import '@/css/index.css'



var engine = require('store/src/store-engine');
var storages = [
  require('store/storages/localStorage'),
  require('store/storages/cookieStorage')
];
var plugins = [
  require('store/plugins/defaults'),
  require('store/plugins/expire')
];
var store = engine.createStore(storages, plugins);

Vue.prototype.store=store;
Vue.prototype.axios = axios;
// Vue.use(YDUI);
Vue.config.productionTip = false;

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
});

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store:vue_store
});
