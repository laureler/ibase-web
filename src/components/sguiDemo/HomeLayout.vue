<template>
	<div id="HomeLayout">
		<sg-button type="primary">主按钮</sg-button>&nbsp;
		<sg-input placeholder="请输入内容"></sg-input>
		<sg-layout style="height: 300px;">
			<sg-layout-north :size="50">北边</sg-layout-north>
			<sg-layout-east resize="">东边</sg-layout-east>
			<sg-layout-west resize="">西边</sg-layout-west>
			<sg-layout-south :size="50">南边</sg-layout-south>
			<sg-layout-center>内容区</sg-layout-center>
		</sg-layout>
	</div>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator'


import SgLayout from 'southgisui'

Vue.use(SgLayout)

	@Component
export default class HomeLayout extends Vue {

}
</script>

<style scoped lang='scss'>

</style>
