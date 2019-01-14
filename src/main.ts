/// <reference path="./typings/sgui.d.ts" />
import Vue from 'vue' // 引入vue.js
import App from './App.vue' // 引入根组件
import index from '@/framework/router' // 引入 vue-router
import '@/framework/hooks/routerHooks'; // 注册自定义钩子函数
import store from './store' // 引入 vue-store
import Http from '@/framework/network/index' // 引入HTTP，1. axios
import _ from 'lodash'; // 引入lodash
import Cookie from 'js-cookie' // 引入jscookie

import sgui from 'southgisui'
import 'southgisui/lib/sgui-theme/index.css'
Vue.use(sgui)

Vue.config.productionTip = false // 禁用产品模式下的vue工程提示


Vue.prototype.$_ = _; // 挂载 lodash  到vue根实例上
Vue.prototype.$cookie = Cookie; // 挂载 $cookie 到vue根实例上
Vue.prototype.$Axios = Http; // 挂载 $Axios  到HTTP根实例上

new Vue({ // 初始化vue组件并且把vue根实例挂载到 #app
	router: index,
	store,
	render: h => h(App)
}).$mount('#app')
