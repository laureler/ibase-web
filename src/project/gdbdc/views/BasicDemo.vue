<template>
  <div class="home">
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
    </div>
    <!--<TSInVue propMessage="typeScript"></TSInVue>-->

  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import { Route } from 'vue-router';

import TSInVue from '@/components/TSInVue.vue'

// 引用组件声明
@Component({
	components: {
		TSInVue
	}
})

export default class BasicDemo extends Vue {
  // data数据声明
  // 没有默认值的声明
  msg!:string
  // 有默认值的声明
  countNumber?:number = 0




  // 生命周期钩子函数
  // 实例创建前
  beforeCreate () {}
  // 实例创建完成
  created () {}
  // 挂载实例前，一般用来获取组件无关渲染的数据
  beforeMount () {}
  // 已经挂载之后的状态 一般用来获取页面初始化的数据，这里使用了异步方法 async
  async mounted () {
  	try {
  		const data = await this.$Axios.get('/userList')
  		// do some code
  	} catch (e) {
  		console.error(e);
  	}
  }
  // 组件数据更新前，在组件数据更新的时候回优先触发更新前
  beforeUpdate () {}
  // 组件数据更新后，在组件数据更新的时候，会在更新前事件触发后随之而触发
  updated () {}
  // 注意如果有keep-alive那么应当是使用 activated & deactivated
  // 组件激活的时候调用
  activated () {}
  // 组件停用的时候调用
  deactivated () {}
  // 组件被销毁之前调用
  beforeDestory () {}
  // 组件被销毁之后调用
  destoryed () {}













  // 路由钩子函数
  // The class component now treats beforeRouteEnter
  // and beforeRouteLeave as Vue Router hooks
  beforeRouteEnter (to:Route, from:Route, next:Function) {
  	next() // needs to be called to confirm the navigation
  }

  beforeRouteLeave (to:Route, from:Route, next:Function) {
  	next() // needs to be called to confirm the navigation
  }
  beforeRouteUpdate (to:Route, from:Route, next:Function) {
  	next()
  }
}
</script>
