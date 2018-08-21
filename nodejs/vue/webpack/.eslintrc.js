module.exports = {
	parserOptions: {
		parser: 'babel-eslint' // use babel to parse javascript
	},
	extends: [
		'plugin:vue/recommended', // apply recommended rules from the vue plugin
		'standard' // apply standard linting rules
	],
	plugins: [
		'vue'
	]
}