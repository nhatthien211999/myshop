import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueRouter from 'vue-router'
import router from './router'

import VueCarousel from 'vue-carousel';
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue, VueRouter, VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
