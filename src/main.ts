import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Http from '@/framework/network/index'
import _ from 'lodash';
import Cookie from 'js-cookie'

Vue.config.productionTip = false


Vue.prototype.$_ = _;
Vue.prototype.$cookie = Cookie;
Vue.prototype.$http = Http;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
