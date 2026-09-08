export default {
	extends: '@inclusive-design/stylelint-config',
	ignoreFiles: ['dist/**'],
	rules: {
		'custom-property-pattern': '^_?([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
	},
};
