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
    'no-param-reassign': 'warn',

    // this is excessive imo
    // example this.position.left = e.pageX + 4 - popover.offsetWidth * 0.9; in popover.vue 52
    // can set to be ok for equal precedence, which is what I think it should be at the max
    'no-mixed-operators': 'warn',

    // why, but we have mixed
    'no-plusplus': ['warn', {
     'allowForLoopAfterthoughts': true
     }],

    // causes problems with render service-status-render-event.vue 22
    'consistent-return': 'warn',

    // airbnb's version
    // disallow certain syntax forms;
    // ForOfStatement tabs.vue 50
    // http://eslint.org/docs/rules/no-restricted-syntax
    /*'no-restricted-syntax': [
     'error',
     'ForInStatement',
     'ForOfStatement',
     'LabeledStatement',
     'WithStatement',
     ],*/
    'no-restricted-syntax': 'warn',

    // doesn't like a = b = c
    // analytics.js 13
    'no-multi-assign': 'warn',

    // doesn't like unnamed functions
    // core/analytics.js 6
    // change_language.js # 5
    'func-names': ['warn', 'as-needed'],

    // doesn't like __vueClickOutside__, but I'm not sure why we are doing it
    // click-oustide.js
    'no-underscore-dangle': 'warn',

    // If the property name doesn't need quotes it won't let you put them in.
    // For example {'Accept': 1} would be {Accept: 1}
    // services/index.js 50
    'quote-props': ['warn', 'as-needed'],

    // If the property name is the same as the value, you skip the assignment
    // for example { 'body': body } goes to {body}
    // services/index.js 54
    'object-shorthand': 'warn',

    // Literally looks for linear definition, top to bottom. But do we really care?
    // requests/index.js all over
    'no-use-before-define': 'warn',

    // Doesn't lke javascrip:<<url here>>
    // core/analytics 32
    'no-script-url': 'warn',

    // triple equals, probably should warn on this
    // will take a while to sift through. most places they cast strings to
    // int for comparison...however, they aren't guaranteed to come through.
    'eqeqeq': 'warn',

    // regular expression issue in main.js
    // followed its suggestion in another location, but the one in main.js (35) needs to be looked
    // at to make sure it doesn't change the regex
    'no-useless-escape': 'off',

    // client/main.js 36
    // can easily add `// no default` after the last case and it will ignore  the rule
    'default-case': 'warn',

    'no-console': 'off',

    'max-len': 'off',
  }
};
