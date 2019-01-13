import axios, { AxiosResponse } from 'axios';
import _ from 'lodash';
import QS from 'qs';
import Cookies from 'js-cookie';

const token: string = Cookies.get('token') || '';
// 覆盖 axios 默认配置
_.assignIn(axios.defaults, {
// baseURL: '/',
	baseURL: 'https://www.easy-mock.com/mock/5c3890ef356df95905dc2349/vue3',
	// 超时时间 30s
	timeout: 30 * 1000,
	// xsrf安全设置
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN',
	headers: { 'Authorization': 'Basic ' + token, 'x-requested-with': 'XMLHttpRequest' },
	params: {
		locale: Cookies.get('language'),
		_: new Date().getTime()
	},
	// 请求前的数据处理
	transformRequest: [function (data: any) {
		return QS.stringify(data, { allowDots: true });
	}],
	// 请求后的数据处理
	transformResponse: [function (data: AxiosResponse) {
		return data
	}]
});

// todo 降低耦合 把 过滤器抽取到独立模块中去
// 请求拦截器
axios.interceptors.request.use(function (config) {
// 发送请求前
	  return config;
}, function (error) {
// 请求错误
	return Promise.reject(error);
});

// 响应连接器
axios.interceptors.response.use(function (response) {
// 响应成功 只返回 响应数据
	return response.data;
}, function (error) {
// 响应失败
	return Promise.reject(error);
});

export default axios;
