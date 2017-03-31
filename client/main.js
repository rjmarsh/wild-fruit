import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './store/store';
import App from './app';
import Main from './views/main';

Vue.use(VueRouter);
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
				component: Main,
			},
			{
				path: "/learn",
				component: Main,
			},
			{
				path: "/find-duplicates",
				component: Main,
			},
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
