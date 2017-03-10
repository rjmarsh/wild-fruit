import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import Main from './views/main';
import Create from './views/create';
import Manage from './views/manage';
import Learn from './views/learn';
//import cookiesUtil from './cookies';

Vue.use(VueRouter);

//const accessToken = getCookie('fsaccesstoken');
//cookiesUtil.removeItem('FSaccesstoken');

const routes = [
	{
		path: '/',
		component: App,
		children: [
			{
				path: '/',
				component: Main,
			},
			{
				path: '/create-workflow',
				component: Create,
			},
			{
				path: '/manage-workflows',
				component: Manage,
			},
			{
				path: "/learn",
				component: Learn,
			}
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});


router.beforeEach ((to, from, next) => {
	console.log('\n\nbeforeEach:');
	console.log('-------------------------');
	console.log(to);
	console.log('-------------------------');
	console.log(from);
	console.log('-------------------------');
	console.log(next);
	console.log('-------------------------');
	next();
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	data() {
		return {};
	},
});

