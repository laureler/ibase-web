import axios from 'axios';

// 请求拦截器
axios.interceptors.request.use(function (config) {
	debugger
	// 发送请求前
	return config;
}, function (error) {
	// 请求错误
	return Promise.reject(error);
});

// 响应连接器
axios.interceptors.response.use(function (response) {
	// 响应成功 只返回 响应数据
	debugger
	return response.data;
}, function (error) {
	// 响应失败
	return Promise.reject(error);
});
