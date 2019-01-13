<template>
	<div style="border: 1px solid #333333">
		<button v-on:click="clickToAdd">我是自定义事件组件</button>
		<br>
		<button v-on:click="clickEmit">我负责加载父组件定义的自定义事件domsome</button>
		<br>
		<span>我会被加长：{{str}}</span>
		<br>
		<br>
		<br>
		<br>
		注入值-times ：{{times}}
		<br>
		注入值-provideObj ：{{provideObj}}
	</div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Prop, Vue } from 'vue-property-decorator'

@Component
export default class diyEvent extends Vue {
	str:string = ''

@Inject() times!:number
	@Inject() provideObj!:object

	@Prop() private msg!: string;
	clickToAdd ():void{
		this.str += 'A'
	}
	clickEmit ():void{
		this.$emit('dosome', this)
	}
	@Emit('dosome')
	// @Emit() // 默认会触发 add-to-count事件,要传递的参数就是返回值
	addToCount (n:number) {
		return this;
	}
	// addToCount (n:number):void{	// 参数n为数字，方法不会返回值
	// 	this.$emit('dosome', this)
	// }
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
