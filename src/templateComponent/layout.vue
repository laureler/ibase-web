<template>
	<div class="hello">
		layout 布局

		{{msg}}
		<div>
			<div>
				<sg-button>默认按钮</sg-button>
				<sg-button type="primary">主按钮</sg-button>
				<sg-button type="info">基本按钮</sg-button>
				<sg-button type="success">成功按钮</sg-button>
				<sg-button type="warning">警告按钮</sg-button>
				<sg-button type="error">错误按钮</sg-button>
			</div>
			<div style="margin-top: 15px;">
				<sg-button type="text">文本按钮</sg-button>
				<sg-button type="primary" outline="">主按钮</sg-button>
				<sg-button type="info" outline="">提示按钮</sg-button>
				<sg-button type="success" outline="">成功按钮</sg-button>
				<sg-button type="warning" outline="">警告按钮</sg-button>
				<sg-button type="error" outline="">错误按钮</sg-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'


@Component
export default class Layout extends Vue {
	@Prop() private msg!: string;
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
