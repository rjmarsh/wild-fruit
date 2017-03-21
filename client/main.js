import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import store from './store/store';
import App from './app';
import Current from './views/current';
import Create from './views/create';
import Manage from './views/manage';
import Learn from './views/learn';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

store.subscribe((mutation, state) => {
	console.log('--- state change ---------------------------------');
	console.log(state);
	console.log(mutation.type)
	console.log(mutation.payload)
})

const routes = [
	{
		path: '/',
		component: App,
		children: [
			{
				path: '/',
				component: Current,
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

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	data() {
		return {};
	},
});
