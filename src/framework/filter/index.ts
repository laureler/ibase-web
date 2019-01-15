import Vue from 'vue'

Vue.filter('removeHTML', function (input: string):string {
	return input && input.replace(/<(?:.|\n)*?>/gm, '')
		.replace(/(&rdquo;)/g, '\"')
		.replace(/&ldquo;/g, '\"')
		.replace(/&mdash;/g, '-')
		.replace(/&nbsp;/g, '')
		.replace(/&gt;/g, '>')
		.replace(/&lt;/g, '<')
		.replace(/<[\w\s"':=\/]*/, '');
})
