import { createDecorator } from 'vue-class-component'
import {ComponentOptions,Vue} from "vue";

// 创建自定义的 装饰器
export const NoCache = createDecorator((options:ComponentOptions<Vue>, key) => {
	// component options should be passed to the callback
	// 组件的options选 应该传递给回调方法
	// 选项的更新也会进而影响到组件
	options.computed[key].cache = false
})
