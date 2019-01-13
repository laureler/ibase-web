import { createDecorator } from 'vue-class-component'
import { ComponentOptions } from 'vue';

// 创建自定义的 装饰器
export const NoCache = createDecorator((options, key) => {
	// component options should be passed to the callback
	// 组件的options选 应该传递给回调方法
	// 选项的更新也会进而影响到组件

	var computed:any = options.computed;            // 设置any避开TS的类型限制
	var computedElement:any = computed[key];        // 设置any避开TS的类型限制
	computedElement.cache = false
})
