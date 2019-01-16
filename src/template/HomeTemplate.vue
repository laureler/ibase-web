<template>
	<div class="hello">
	<!--	<headerBar/>
		<leftBar/>
		<content/>-->
		<ABasic></ABasic>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import HomeLayout from '@/components/sguiDemo/HomeLayout.vue'
import ABasic from '@/components/A-Basic.vue';

@Component({
	components: {
		HomeLayout,
		ABasic
	}
})



export default class Layout extends Vue {
	@Prop() private msg: string;
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
