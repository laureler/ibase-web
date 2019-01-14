import Home from '../../../views/base/Home.vue'
import HomeBak from '../../../views/base/HomeBak.vue'
import { RouteConfig } from 'vue-router';
// 路由级别的代码分隔
// 使用箭头函数引入一个import会导致路由在访问的时候 懒加载
// 也就是说只有当路由被访问的时候，才会加载路由所需页面
let baseRoute:RouteConfig[] = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/homeBak', name: 'home', component: HomeBak },
	// 项目介绍相关
	{ path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../../../views/base/About.vue') },
	// { path: '/tsInVue', name: 'tsInVue', component: () => import('./components/TSInVue.vue') }, // typeScript在vue中的使用
]
export default baseRoute
