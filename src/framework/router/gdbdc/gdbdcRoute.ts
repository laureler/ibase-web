// 路由级别的代码分隔
// 使用箭头函数引入一个import会导致路由在访问的时候 懒加载
// 也就是说只有当路由被访问的时候，才会加载路由所需页面
import { RouteConfig } from 'vue-router';

let gdbdcRoute:RouteConfig[] = [
	// Axios在Vue中的使用
	{ path: '/AxiosInVue', name: 'AxiosInVue', component: () => import('../../../components/AxiosInVue.vue') },
	// typeScript在vue中的使用
	{ path: '/tsInVue', name: 'tsInVue', component: () => import('../../../views/gdbdc/TypeScriptDemo.vue') }
]
export default gdbdcRoute
