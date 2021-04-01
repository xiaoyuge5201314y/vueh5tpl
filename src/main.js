import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/base.css'
// 导入vantui
import vant from 'vant'
Vue.use(vant)
// 导入axios 
import $http from './api/http';
// 导入移动端适配
import {
  viewInit
} from './config//mobile.config.'
import './config/methods'
Vue.prototype.$http = $http;
// 中央事件总线
Vue.prototype.$bus = new Vue();

viewInit(375);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')