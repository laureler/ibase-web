<template>
  <div class="home">
    <TSInVue propMessage="typeScript"></TSInVue>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TSInVue from '@/components/TSInVue.vue'
import { Route } from 'vue-router'; // @ is an alias to /src

@Component({
	components: {
		TSInVue
	}
})
export default class Home extends Vue {
	// 路由钩子函数
	// The class component now treats beforeRouteEnter
	// and beforeRouteLeave as Vue Router hooks
	beforeRouteEnter (to:Route, from:Route, next:Function) {
		console.group('%c%s', 'background-color:white', `组件内部路由守卫钩子函数：beforeRouterEnter`)
		console.log('%c%s', 'background-color:#6e825e', 'beforeRouterEnter')
		next() // needs to be called to confirm the navigation
	}

	beforeRouteLeave (to:Route, from:Route, next:Function) {
		console.group('%c%s', 'background-color:white', `组件内部路由守卫钩子函数：beforeRouteLeave`)
		console.log('%c%s', 'background-color:#6e825e', 'beforeRouteLeave')
		console.groupEnd()
		next() // needs to be called to confirm the navigation
	}
	beforeRouteUpdate (to:Route, from:Route, next:Function) {
		console.group('%c%s', 'background-color:white', `组件内部路由守卫钩子函数：beforeRouteUpdate`)
		console.log('%c%s', 'background-color:#6e825e66', 'beforeRouteUpdate')
		next()
	}
}
</script>
