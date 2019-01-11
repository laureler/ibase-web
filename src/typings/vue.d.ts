import { AxiosStatic, AxiosInstance } from 'axios';
import { LoDashStatic } from 'lodash';
// 声明ts类型
declare module 'vue/types/vue' {
	interface Vue {
		$_: LoDashStatic;
		$cookie: any;
		$Axios: AxiosStatic;
	}
}
declare module 'axios/index' {
	export interface AxiosResponse {

	}
}
