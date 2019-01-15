module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
		parser: 'typescript-eslint-parser'
	},
	env: {
		browser: true,
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard',
		'@vue/typescript'
	],
	globals: {
		__static: true
	},
	plugins: [
		'html',
		'typescript'
	],
	'rules': {
		'no-useless-escape':0,
		// 允许拓展原生对象的私有属性
		'no-extend-native': 0,
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// 不再禁用 三目表达式非必需返回值
		'no-unneeded-ternary': 0,
		// allow async-await 允许异步等待
		'generator-star-spacing': 0,
		// allow debugger during development 允许开发过程使用调试debugger
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-unused-vars': [0, {
			// 允许声明未使用变量
			'vars': 'local',
			// 参数不检查
			'args': 'none'
		}],
		'no-eval': 0,
		// 关闭语句强制分号结尾
		'semi': [0],
		// 缩进使用tab的配置 start
		'no-tabs': 0,
		// 缩进使用tab
		'indent': ['error', 'tab'],
		// 禁止混用 tab spaces
		'no-mixed-spaces-and-tabs': [0],
		// 缩进使用tab的配置 end
		// ------------------------
		// 缩进使用空格的配置 start
		/* "no-tabs": 2,
		"indent": ["error", 2], */
		// 缩进使用空格的配置 end
		// ------------------------
		// 空行最多不能超过100行
		'no-multiple-empty-lines': [0, { 'max': 100 }],
		// 永远不再使用驼峰命名法
		'camelcase': ['warn', {
			'properties': 'never'
		}],
		// 不可以使用 string 作为构造方法参数
		'no-new-wrappers': 'warn',
		// 强制使用 ===
		'eqeqeq': ['warn', 'always'],
		// 未定义变量 警告
		'no-undefined': 'warn',
		// 禁止未使用过的表达式
		'no-unused-expressions': 'warn',
		'no-undef': 'warn',
		'no-multi-spaces': [1, {
			'exceptions': { 'Property': true }, // 需要属性前不允许有空格
			'ignoreEOLComments': true   // 忽略行尾注释之前的空格
		}]
	}
}
