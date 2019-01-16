<template>
	<div id="Basic">
		basic
	</div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator'

// 引入组件依赖（建议跟随后缀名称，以便于识别)
import Hello from '@/components/Hello.vue'
// import Hello2 from '@/components/Hello2.vue'


// 引入要使用的组件组件
@Component({// @Component	// 声明组件 VueInTS (来自 Vue-Property-Decorator从 vue-class-component 继承)
	props: {
		propMessage: String
	},
	// 引入多个组件
	components: {
		Hello
		// Hello2
	}
})

export default class ABasic extends Vue {
	name?:string = 'hello';

	name1:string = 'hello';
	// ? 代表当前name2属性字段可有可无，一般不会在这里声明
	// name2?:string
	// 代表当前name3 可以不用初始化赋值
	name3:string

	@Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#Basic{

	}
</style>
