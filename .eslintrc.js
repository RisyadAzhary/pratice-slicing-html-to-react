module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	settings: {
		"import/resolver": {
			node: {
				paths: ["src"],
			},
		},
	},
};
