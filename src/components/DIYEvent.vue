<template>
	<div style="border: 1px solid #333333">
		<button v-on:click="clickToAdd">我是自定义事件组件</button>
		<br>
		<button v-on:click="clickEmit">我是自定义事件组件</button>
		<br>
		<span>我会被加长：{{str}}</span>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class diyEvent extends Vue {
	str:string = ''
	@Prop() private msg!: string;
	clickToAdd (e):void{
		this.str += 'A'
	}
	clickEmit (e):void{
		this.$emit('dosome', this)
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
