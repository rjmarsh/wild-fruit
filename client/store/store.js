import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
		workflows: [],
		currentWorkflow: -1
	},
	getters: {
		getWorkflowByName: state => (workflowName) => {
			state.workflows.forEach(function(item) {
				if (item.name === workflowName) {
					return item;
				}
			});
			return {};
		},
		getCurrentWorkflow: state => {
			if (state.currentWorkflow !== -1) {
				return state.workflows[currentWorkflow];
			}
			return {};
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		addWorkflow(state, workflow) {
			state.workflows.push(workflow);
		},
		removeWorkflow(state, workflowName) {
			state.workflows.forEach(function(item, index) {
				if (item.name === workflowName) {
					if (index === state.currentWorkflow) {
						state.currentWorkflow = -1;
					}
					state.workflows.splice(index, 1); // remove the element from the array
				}
			});
		},
		setAsCurrentWorkflow(state, workflowName) {
			state.workflows.forEach(function(item, index) {
				if (item.name === workflowName) {
					state.currentWorkflow = index;
				}
			});
		}
	},
	strict: true // In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown.
})
