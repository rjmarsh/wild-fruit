import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
		workflows: []
	},
	getters: {
		getWorkflows: (state, getters) => (person) => {
		},
		getWorkflow: (state, getters) => (workflowName) => {
			console.log('--- state ----------------------------------');
			console.log(state);
			console.log('--- getters --------------------------------');
			console.log(getters);
			console.log('--- person ---------------------------------');
			console.log(person);
			console.log('--------------------------------------------');
//			return state.workflows.prototype.get(person);
		},
	},
	mutations: {
		setUsername(username) {
			this.state.username = username;
		},
		addWorkflow(state, workflow) {
			state.workflows.push(workflow);
		},
	}
})
