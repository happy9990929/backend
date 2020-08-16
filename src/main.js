import Vue from 'vue';
import jquery from 'jquery';
import axios from 'axios';
import VueAxios from 'vue-axios';
// Loading 套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'popper.js/dist/popper.min';
// import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap';
import '../public/js/fontAwsome_all.min';

window.$ = jquery;
Vue.use(VueAxios, axios);
Vue.use(Loading);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
