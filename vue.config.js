// vue.config.js
module.exports = {
	// 选项...
	baseUrl: process.env.NODE_ENV === 'production'
		? 'mainWeb'
		: '/',
	// outputDir:'dist',        //编译输出目录
	// assetsDir:'',
	// indexPath:''             //
	// filenameHashing:true,    //为文件名添加hash值
	// pages:undefind,  // todo 多页面模式运行
	// lintOnSave:true,
	lintOnSave: process.env.NODE_ENV !== 'production' ? true : false,
	runtimeCompiler: true, // 开启vue template渲染模板选项
	// transpileDependencies:[]
	// productionSourceMap:true //开启生产环境的source map，关闭可以加速
	// crossorigin:undefined    //在html-webpack-plugin构建时设置link/script标签的 crossorigin属性，直接写入不算。（H5属性）
	// integrity:false          // 在html-webpack-plugin构建时设置注入的标签，启动SRI。 CDN用到
	// configureWebpack:{}      //扩展webpack插件，此对象会被merge到webpack最终配置中。
	// chainWebpack:function    // 接受一个机遇webpack-chain的chainableConfig实例，允许更细粒度修改。
	css: {
		// modules:false    //只有*.module结尾的文件才会被认为css module模块，如果设置为true，所有的[css/scss/sass/less/sty*]文件都会认为css module
		// extract: process.env.NODE_ENV == 'production' ? true : false  //是否把css从内联样式抽取出来，如果你是开发组件库，建议你(哪怕是生产环境)不要抽取,开发模式为了热部署，就不抽取了。
		// sourceMap:false //是否开启css sourceMap
		/* loaderOptions: {
			// css: {}, //选项会传递给 css-loader
			// postcss: {}  //选项会传递给 postcss-loader
			// sass: {   //选项会传递给 sass-loader
			// @/ 是src/的别名
			// data:`@import "@/variable.scss"`  //假设你有src/variable.scss这个文件
			// }
			// less: {}  //选项会传递给 less-loader
			// stylus: {}  //选项会传递给 stylus-loader
		} */
	},
	devServer: {// devServer支持所有的webpack-dev-server选项
		// overlay: {
		// 	warnings: true, // 开启eslint编译警告
		// 	errors: false // 关闭浏览器eslint编译错误提示（eslint会导致编译错误)
		// },
		// proxy: [{ // 代理服务器利用插件为：http-proxy-middleware
		// 	target: 'http://192.168.10.97:8090',
		// 	changeOrigin: true,
		// 	// followRedirects:true,  //跟随重定向 默认false
		// 	ws: true,
		// 	hostRewrite: 'localhost:8080',
		// 	onProxyRes: function (proxyRes, req, res) {
		// 		proxyRes.headers['x-added'] = 'foobar' // add new header to response
		// 		debugger
		// 	}
		// }]
		// parallel:require('os').maxCpuSpeed().length > 1  //是否为babel或ts使用thread-loader,系统必须多核心
		// pwa: object  //向pwa插件传递参数
		// pluginOptions: {} // 不进行schema验证的对象，因此可以利用它传递第三方插件选项。
	}
}
