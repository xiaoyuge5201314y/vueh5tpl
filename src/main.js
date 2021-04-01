import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入axios 
import $http from './api/http';
Vue.prototype.$http = $http;
// 导入移动端适配
import {
  viewInit
} from './config//mobile.config.'
viewInit(750);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')