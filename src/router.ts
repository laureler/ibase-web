import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// 路由级别的代码分隔
			// 使用箭头函数引入一个import会导致路由在访问的时候 懒加载
			// 也就是说只有当路由被访问的时候，才会加载路由所需页面
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/tsVue',
			name: 'tsVue',
			component: () => import(/* webpackChunkName: "about" */ './components/VueInTS.vue')
		},
	]
})
