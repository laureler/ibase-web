import Vue from 'vue'
import Router, { Route, RouteConfig } from 'vue-router'

import baseRoute from '@/framework/router/base/baseRoute'
import gdbdcRoute from '@/project/gdbdc/router/gdbdcRoute'

Vue.use(Router)
/**
 *
 * @param baseRoute     基础路由配置
 * @param mixinRoute    需要混入路由配置
 */
let mergeRoutes = function (baseRoute:RouteConfig[], mixinRoute?:RouteConfig[]):RouteConfig[] {
	let mergeRoute!:RouteConfig[];
	if (typeof mixinRoute === 'undefined') {
		return baseRoute
	} else {
		mergeRoute = [...baseRoute, ...mixinRoute];
		return mergeRoute
	}
}
let router = new Router({
	mode: 'history',
	base: '',
	routes: mergeRoutes(baseRoute, gdbdcRoute)
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => { // 全局前置路由
	console.group('路由', 'background-color:red', '路由守卫:beforeEach')
	next() // 注意，一定要使用 next() 来释放钩子函数
})
router.beforeResolve((to, from, next) => {
	next() // 注意，一定要使用next() 来释放钩子函数
})
router.afterEach((to, from) => {
	console.groupEnd()
})
export default router
