import Component from 'vue-class-component'

// 用下面的三个名字来注册路由的钩子函数
Component.registerHooks([
	'beforeRouteEnter',
	'beforeRouteLeave',
	'beforeRouteUpdate' // for vue-router 2.2+
])
