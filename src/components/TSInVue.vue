<template>
	<div class="hello">
		<h2>typeScript 在vue中的使用</h2>
		<h4>data选项:</h4>


		1. <span>helloMsg:{{helloMsg}}</span>
		<br>
		<button v-on:click = alertMessage>点击了本按钮就会触发事件</button>
		<br>

		<span>计数器：{{clickCount}}</span>
		<br>

		<br>

		<diyEvent v-on:dosome="emitClick"></diyEvent>
		<br>
		--------------------------------------------------
		<h4>@model</h4>
		<br>
		--------------------------------------------------
		<h4>@watch</h4>
		<br>
		<button v-on:click="sumCount">点击增加计数器数量</button><span>计数器：{{clickCount}}</span>
		<br>
		--------------------------------------------------
		<h4>@computed</h4>
		<br>
		计算属性默认根据缓存计算，但是在这里我们添加了noCache自定义装饰器@noCache，所以每次获取计算属性均为不带缓存的
		<br>
		<button v-on:click="alertTime">获取计算属性random的属性值</button>&nbsp;&nbsp;&nbsp;
		<button v-on:click="alertTime2">获取计算属性random的属性值---带有缓存</button>
		<span>计数器：{{random}}</span>
		<br>
		--------------------------------------------------
	</div>
</template>

<script lang="ts">


// import { Component, Prop, Vue } from 'vue-property-decorator'
import Vue from 'vue'

import Component from 'vue-class-component' // vue-class-component：强化Vue组件，使用 TypeScript/装饰器
import { Emit, Prop, Provide, Watch } from 'vue-property-decorator'; // vue-property-decorator：在 vue-class-component 上 继续 增强更多的结合Vue 特性的装饰器
import { mapState, mapMutations } from 'vuex' // 引入vuex 中的辅助函数

// import HelloWorld from '@/components/HelloWorld.vue'

import diyEvent from '@/components/DIYEvent.vue'
import MyMixin from '@/framework/mixin/mixin';
import { NoCache } from '@/framework/decorators/index';

// 你也可以分步声明数据 来确保每一个数据都是可推导观察的
// 首先用vue注册组件，然后再把当前组件的属性通过继承的形式传递给下面
/* const AppProps = Vue.extend({
		props: {
			propMessage: String
		}
	}) */

	// 引入要使用的组件组件
	@Component({// @Component	// 声明组件 VueInTS (来自 Vue-Property-Decorator从 vue-class-component 继承)
		props: {
			propMessage: String
		},
		// 引入多个组件
		components: {
			diyEvent
		},
		// 你可以在这里使用vuex中的为组件绑定辅助函数
		computed: mapState([
			'count'
		]),
		methods: mapMutations([
			'increment'
		])
	})

export default class VueInTS extends MyMixin {
	// data 数据  你可以直接声明组件数据
	propMessage!: string													// 赋值一个没有默认值的字符串
	clickCount: number = 0													// 赋值一个拥有默认值的字符串
	helloMsg = 'hello-' + this.propMessage									// 直接利用组件的prop属性来初始化数据
	// 相同效果
	// data:{
	// propMessage:'',
	// 	clickCount:0
	// }


	// props 属性
	@Prop(Number) propA!: number											// (来自 Vue-Property-Decorator)
	@Prop({ default: 'demoDefaultValue' }) propB!: number					// (来自 Vue-Property-Decorator) 设置默认值
	@Prop([String, Boolean]) propC!: string | boolean						// (来自 Vue-Property-Decorator) 设置多类型
	// 上述修饰符的等价语法(propA == propA2) (propB == propB2) (propC == propC2)
	props:{
		propA2:{type:number},
		propB2:{default:'demoDefaultValue', type:number},
		propC2:{type:[string, boolean]}
	}

	// el:string = '#app' // 只有根实例才可以用el选项
	// el:""


	// @Model // todo Model修饰符


	// @provide
 	@Provide('provideObj') provideObj: object = {
 		coponentName: 'tsInVue',
 		isFather: true
 	}
	@Provide() times: number = 0
	//	上述代码等价下面
	provide () {
		return {
			provideObj2: {
				isFather: true,
				componentName: 'tsInVue'
			},
			times: 0
		}
	}



	// 声明组件
	components: {
		diyEvent
	}




	@Watch('clickCount', { immediate: true, deep: true })
	onClickCount (newVal, oldVal) {
		console.log('%c%s', 'background-color:white;font-weight: bold;', `onClickCount:监听到计数器clickCount在变化,由${oldVal}变化到${newVal}`)
	}
	@Watch('clickCount', { immediate: true, deep: true })
	onClickCount2 (newVal, oldVal) {
		console.log('%c%s', 'background-color:white;font-weight: bold;', `onClickCount2:监听到计数器clickCount在变化,由${oldVal}变化到${newVal}`)
	}
	// @watch增加了两个监听器，等同于下面的代码
	/* watch:{
		'clickCount':[{
				handler:'onclickCount',
				immediate:false,
				deep:true
			}, {
				handler:'onclickCount2',
				immediate:false,
				deep:false
			}
			],
	} */









	// methods 方法直接调用
	// 点击按钮会提示当前按钮内容
	alertMessage (e):void{
		alert(e.target.innerHTML)
	}
	alertTime () {
		alert(this.random)
	}
	alertTime2 () {
		alert(this.random2)
	}
	sumCount () {		// 计数器增加1次
		this.clickCount += 1
	}
	// computed 计算属性
	@NoCache
	get random () {
		return Math.random()
	}
	get random2 () {
		return Math.random()
	}
	get computedMsg (): string {
		return ''
	}





	// 生命周期钩子函数
	beforeCreate () {		// 实例创建前
		console.group('%c%s', 'background-color:#e9edf2', 'beforeCreate--实例创建前状态')
		console.log('%c%s', 'background-color:#e9edf2', 'el  :' + this.$el)
		console.log('%c%s', 'background-color:#e9edf2', 'data  :' + this.$data)
		console.log('%c%s', 'background-color:#e9edf2', 'clickCount  :' + this.clickCount)
		// console.log('%c%s', 'background-color:#e9edf2', 'propMessage  :' + this.propMessage) // 这里就体现出TS的价值了，propMessage命名是string，却给出了undefined的类型
		console.groupEnd()
	}
	created () {			// 实例创建完成
		console.group('%c%s', 'background-color:#e0e3ed', 'created--实例创建完成状态')
		console.log('%c%s', 'background-color:#e0e3ed', 'el  :' + this.$el)
		console.log('%c%s', 'background-color:#e0e3ed', 'data  :' + this.$data)
		console.log('%c%s', 'background-color:#e0e3ed', 'clickCount  :' + this.clickCount)
		console.log(this.mixinValue)	// mixinValue集成来自mixin.ts
		console.groupEnd()
	}
	beforeMount () {		// 挂载实例前，一般用来获取组件无关渲染的数据
		console.group('%c%s', 'background-color:#beaaca', 'beforeMount--挂载之前的状态')
		console.log('%c%s', 'background-color:#beaaca', 'el  :' + this.$el)
		console.log('%c%s', 'background-color:#beaaca', 'data  :' + this.$data)
		console.log('%c%s', 'background-color:#beaaca', 'clickCount  :' + this.clickCount)
		console.groupEnd()
	}
	async mounted () {		// 已经挂载之后的状态 一般用来获取页面初始化的数据，这里使用了异步方法 async
		console.group('%c%s', 'background-color:#6b5a84;color:white', 'mounted--已经挂载的状态')
		console.debug('%c%s', 'background-color:#6b5a84;color:white', 'el  :' + this.$el)
		console.log('%c%s', 'background-color:#6b5a84;color:white', 'data  :' + this.$data)
		console.log('%c%s', 'background-color:#6b5a84;color:white', 'clickCount  :' + this.clickCount)

		try {
			const data = await this.$Axios.get('/userList')
			console.table(data)
		} catch (e) {
			console.table(e);
		}
		console.groupEnd()
	}
	beforeUpdate () {		// 组件数据更新前，在组件数据更新的时候回优先触发更新前
		console.group('%c%s', 'background-color:#f7eddc', 'beforeUpdate--数据更新前的状态')
		// console.log('%c%s', 'background-color:#f7eddc', 'el  :' + this.$el.innerHTML)
		console.log('%c%s', 'background-color:#f7eddc', 'data  :' + this.$data)
		console.log('%c%s', 'background-color:#f7eddc', 'clickCount  :' + this.clickCount)
		console.groupEnd()
	}
	updated () {			// 组件数据更新后，在组件数据更新的时候，会在更新前事件触发后随之而触发
		console.group('%c%s', 'background-color:#6e825e', 'updated--数据更新完成时状态')
		console.log('%c%s', 'background-color:#6e825e', 'data  :' + this.$data)
		console.log('%c%s', 'background-color:#6e825e', 'clickCount  :' + this.clickCount)
		console.groupEnd()
	}
	// 注意如果有keep-alive那么应当是使用 activated & deactivated
	activated () {}				// 组件激活的时候调用
	deactivated () {}			// 组件停用的时候调用
	beforeDestory () {}			// 组件被销毁之前调用
	destoryed () {				// 组件被销毁之后调用
	}








	// 实例方法 / 事件
	// vm.$emit @Emit()
	emitClick (obj): void { // 其实没有typeScript无法分析参数，只是手工约束
		this.sumCount();
		console.log('来自：TSInVUE父组件的关爱');
		obj.str += '来自：TSInVUE父组件的关爱←_←：emit'
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
