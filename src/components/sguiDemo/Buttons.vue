<template>
	<div>
		<div>
			<sg-button>默认按钮</sg-button>
			<sg-button type="primary">主按钮</sg-button>&nbsp;
			<sg-button type="info">基本按钮</sg-button>&nbsp;
			<sg-button type="success">成功按钮</sg-button>&nbsp;
			<sg-button type="warning">警告按钮</sg-button>&nbsp;
			<sg-button type="error">错误按钮</sg-button>&nbsp;
		</div>
		<div style="margin-top: 15px;">
			<sg-button type="text">文本按钮</sg-button>&nbsp;
			<sg-button type="primary" outline="">主按钮</sg-button>&nbsp;
			<sg-button type="info" outline="">提示按钮</sg-button>&nbsp;
			<sg-button type="success" outline="">成功按钮</sg-button>&nbsp;
			<sg-button type="warning" outline="">警告按钮</sg-button>&nbsp;
			<sg-button type="error" outline="">错误按钮</sg-button>&nbsp;
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Buttons extends Vue {

}
</script>

<style scoped>

</style>
