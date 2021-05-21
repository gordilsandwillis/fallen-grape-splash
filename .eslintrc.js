module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true,
		},
	},
	ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
	extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: 'babel-eslint',
			settings: {
				react: { version: 'detect' },
			},
			ecmaFeatures: {
				modules: true,
				spread: true,
				restParams: true,
			},
			env: {
				browser: true,
				node: true,
				es6: true,
			},
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:react/recommended',
				'plugin:react-hooks/recommended',
				'plugin:jsx-a11y/recommended',
				'plugin:prettier/recommended',
			],
			rules: {
				camelcase: 0,
				'comma-dangle': 0,
				'import/prefer-default-export': 0,
				'no-console': 'warn',
				'no-nested-ternary': 0,
				'no-underscore-dangle': 0,
				'no-unused-expressions': ['error', { allowTernary: true }],
				'arrow-spacing': ['error', { before: true, after: true }], // recommended
				'no-var': 'error', // optional, recommended when using es6+
				'no-unused-vars': 1, // recommended
				'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
				'prettier/prettier': ['error', { arrowParens: 'avoid', singleQuote: true, trailingComma: 'es5', useTabs: true }],
				'react/destructuring-assignment': 0,
				'react/jsx-filename-extension': [
					1,
					{
						extensions: ['.js', 'jsx'],
					},
				],
				'react/jsx-no-comment-textnodes': 0,
				'react/jsx-props-no-spreading': 0,
				'react/no-array-index-key': 0,
				'react/no-unescaped-entities': 0,
				'react/prop-types': 0,
				'react/require-default-props': 0,
				'react/self-closing-comp': 1,
				'react/state-in-constructor': 0,
				'react-hooks/exhaustive-deps': 'error',
				'react-hooks/rules-of-hooks': 'error',
				'jsx-a11y/anchor-is-valid': 0,
				'jsx-a11y/label-has-associated-control': [
					2,
					{
						assert: 'either',
					},
				],
				'jsx-a11y/label-has-for': 0,
				'react/react-in-jsx-scope': 0,
			},
			plugins: ['prettier'],
		},
	],
}
