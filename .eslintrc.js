module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
		'html',
    'vue',
	],
	// check if imports actually resolve
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	'env': {
		'es6': true
	},
	// add your custom rules here
	'rules': {
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    /*************************************************************************************************/
    // for vue plugin
    'vue/jsx-uses-vars': 2,

    /*************************************************************************************************/
    //TODO - DISCUSS

    // It won't allow you to interact with Vue see analytics.js after disabling this
    // requests/index.js all over the place
    /*		'no-param-reassign': ['error', {
     'props': true,
     'ignorePropertyModificationsFor': ['Vue'],
     }],*/

    'object-shorthand': 'off',
    'no-param-reassign': 'off',

    // this is excessive imo
    // example this.position.left = e.pageX + 4 - popover.offsetWidth * 0.9; in popover.vue 52
    // can set to be ok for equal precedence, which is what I think it should be at the max
//    'no-mixed-operators': 'warn',

    // causes problems with render service-status-render-event.vue 22
//    'consistent-return': 'warn',

//    'no-restricted-syntax': 'warn',

    // doesn't like a = b = c
    // analytics.js 13
//    'no-multi-assign': 'warn',

    // doesn't like unnamed functions
    // core/analytics.js 6
    // change_language.js # 5
//    'func-names': ['warn', 'as-needed'],

    // doesn't like __vueClickOutside__, but I'm not sure why we are doing it
    // click-oustide.js
//    'no-underscore-dangle': 'warn',

    // If the property name doesn't need quotes it won't let you put them in.
    // For example {'Accept': 1} would be {Accept: 1}
    // services/index.js 50
//    'quote-props': ['warn', 'as-needed'],


    // Literally looks for linear definition, top to bottom. But do we really care?
    // requests/index.js all over
//    'no-use-before-define': 'warn',

    // Doesn't lke javascrip:<<url here>>
    // core/analytics 32
//    'no-script-url': 'warn',

    // triple equals, probably should warn on this
    // will take a while to sift through. most places they cast strings to
    // int for comparison...however, they aren't guaranteed to come through.
//    'eqeqeq': 'warn',

    // regular expression issue in main.js
    // followed its suggestion in another location, but the one in main.js (35) needs to be looked
    // at to make sure it doesn't change the regex
//    'no-useless-escape': 'off',

    // client/main.js 36
    // can easily add `// no default` after the last case and it will ignore  the rule
//    'default-case': 'warn',

    'no-console': 'off',

    'max-len': 'off',  'accessor-pairs': 'off',

    // --------------------------------------------------------------------------------------------------
    'array-bracket-spacing': 'off',
    'array-callback-return': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-scoped-var': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'callback-return': 'off',
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'complexity': 'off',
    'computed-property-spacing': 'off',
    'consistent-return': 'off',
    'consistent-return': 'warn',
    'consistent-this': 'off',
    'constructor-super': 'off',
    'curly': 'off',
    'default-case': 'off',
    'default-case': 'warn',
    'dot-location': 'off',
    'dot-notation': 'off',
    'eol-last': 'off',
    'eqeqeq': 'off',
    'eqeqeq': 'warn',
    'func-call-spacing': 'off',
    'func-name-matching': 'off',
    'func-names': ['warn', 'as-needed'],
    'func-names': 'off',
    'func-style': 'off',
    'generator-star-spacing': 'off',
    'global-require': 'off',
    'guard-for-in': 'off',
    'handle-callback-err': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': 'off',
    'init-declarations': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'line-comment-position': 'off',
    'lines-around-comment': 'off',
    'lines-around-directive': 'off',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'new-parens': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-caller': 'off',
    'no-case-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-class-assign': 'off',
    'no-compare-neg-zero': 'off',
    'no-cond-assign': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-constant-condition': 'off',
    'no-const-assign': 'off',
    'no-continue': 'off',
    'no-control-regex': 'off',
    'no-debugger': 'off',
    'no-delete-var': 'off',
    'no-div-regex': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-duplicate-case': 'off',
    'no-duplicate-imports': 'off',
    'no-else-return': 'off',
    'no-empty': 'off',
    'no-empty-character-class': 'off',
    'no-empty-function': 'off',
    'no-empty-pattern': 'off',
    'no-eq-null': 'off',
    'no-eval': 'off',
    'no-ex-assign': 'off',
    'no-extend-native': 'off',
    'no-extra-bind': 'off',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'off',
    'no-func-assign': 'off',
    'no-global-assign': 'off',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'off',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'off',
    'no-invalid-regexp': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-iterator': 'off',
    'no-labels': 'off',
    'no-label-var': 'off',
    'no-lone-blocks': 'off',
    'no-lonely-if': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-operators': 'warn',
    'no-mixed-requires': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-assign': 'off',
    'no-multi-assign': 'warn',
    'no-multiple-empty-lines': 'off',
    'no-multi-spaces': 'off',
    'no-multi-str': 'off',
    'nonblock-statement-body-position': 'off',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-new-object': 'off',
    'no-new-require': 'off',
    'no-new-symbol': 'off',
    'no-new-wrappers': 'off',
    'no-obj-calls': 'off',
    'no-octal': 'off',
    'no-octal-escape': 'off',
    'no-path-concat': 'off',
    'no-plusplus': ['warn', {'allowForLoopAfterthoughts': true}],
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'off',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off',
    'no-regex-spaces': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-restricted-syntax': 'warn',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-script-url': 'off',
    'no-script-url': 'warn',
    'no-self-assign': 'off',
    'no-self-compare': 'off',
    'no-sequences': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'off',
    'no-sparse-arrays': 'off',
    'no-sync': 'off',
    'no-tabs': 'off',
    'no-template-curly-in-string': 'off',
    'no-ternary': 'off',
    'no-this-before-super': 'off',
    'no-throw-literal': 'off',
    'no-trailing-spaces': 'off',
    'no-undef': 'off',
    'no-undefined': 'off',
    'no-undef-init': 'off',
    'no-underscore-dangle': 'off',
    'no-underscore-dangle': 'warn',
    'no-unexpected-multiline': 'off',
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary': 'off',
    'no-unreachable': 'off',
    'no-unsafe-finally': 'off',
    'no-unsafe-negation': 'off',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-use-before-define': 'warn',
    'no-useless-call': 'off',
    'no-useless-computed-key': 'off',
    'no-useless-concat': 'off',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'off',
    'no-useless-rename': 'off',
    'no-useless-return': 'off',
    'no-var': 'off',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'off',
    'no-with': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quote-props': ['warn', 'as-needed'],
    'quote-props': 'off',
    'quotes': 'off',
    'radix': 'off',
    'require-await': 'off',
    'require-jsdoc': 'off',
    'require-yield': 'off',
    'rest-spread-spacing': 'off',
    'semi': 'off',
    'semi-spacing': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'off',
    'space-infix-ops': 'off',
    'space-in-parens': 'off',
    'space-unary-ops': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'use-isnan': 'off',
    'valid-jsdoc': 'off',
    'valid-typeof': 'off',
    'vars-on-top': 'off',
    'vue/jsx-uses-vars': 2,
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    'yoda': 'off',
  },
};
