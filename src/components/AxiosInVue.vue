<template>
	<div class="hello">
		<h2>axios在vue中的使用</h2>
	</div>
</template>

<script lang="ts">
// vue-class-component：强化Vue组件，使用 TypeScript/装饰器
// vue-property-decorator：在 vue-class-component 上 继续 增强更多的结合Vue 特性的装饰器

// import { Component, Prop, Vue } from 'vue-property-decorator'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator';


import helloWorld from '@/components/HelloWorld.vue'
	// 引入其他组件
	@Component({
		components: {
			helloWorld
		}
	})
// 声明组件 VueInTS
export default class VueInTS extends Vue {
		//* **************选项开始*****************//
		// data 数据
		@Provide() obj: object = {}

		@Provide() times:number = 0
		// methods 方法
		addTimes (a:number):number { // 返回一个数字
			console.log(this.obj);
			this.times = this.times + 1;
			return this.times
		}
		countNumber (a:number):void { // 没有返回值
			console.log(a);
		}
		// computed 计算属性
		get computedMsg () {

		}
		// 使用 异步生命周期
		async mounted () {
			try {
				const data = await this.$Axios.get('/userList')
				console.table(data)
			} catch (e) {
				console.table(e);
			}
		}
		//* **************选项结束*****************//
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
