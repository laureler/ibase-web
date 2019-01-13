import Vue from 'vue'
import Vuex from 'vuex'

// 创建 counterState 接口
interface CounterState {
	count: number
}

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0// 计数器
	},
	mutations: {
		increment (state: CounterState) {
			state.count++
		}
	},
	actions: {}
})
