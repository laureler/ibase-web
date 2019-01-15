import Vue from 'vue'

// @ts-ignore
import { dateFormat } from '@/framework/libs/date.js'

Vue.filter('removeHTML', function (input: string):string {
	return input && input.replace(/<(?:.|\n)*?>/gm, '')
		.replace(/(&rdquo;)/g, '\"')
		.replace(/&ldquo;/g, '\"')
		.replace(/&mdash;/g, '-')
		.replace(/&nbsp;/g, '')
		.replace(/&gt;/g, '>')
		.replace(/&lt;/g, '<')
		.replace(/<[\w\s"':=\/]*/, '');
})


/**
 * @Description: 第二个参数params无用。传参日期格式为format。有默认格式。
 * @author hjh
 * @date 2018/10/31
 */
Vue.filter('formatDate', (v:number, params:any, format:string) => {
	if (v) {
		return dateFormat(new Date(v), format ? format : 'YYYY-MM-DD')
	} else {
		return '无期限';
	}
});
Vue.filter('propertyNameFilter', (params:string) => {
	if (!params) { return '' }
	let name = params.split(',');
	if (name.length == 1) {
		return name[0]
	} else {
		return name[name.length - 2];
	}
});
