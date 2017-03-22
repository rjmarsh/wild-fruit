
const state = {
	workflows: [],
	currentWorkflow: -1
};

const getters = {
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
			return state.workflows[state.currentWorkflow];
		}
		return {};
	},
};

const mutations = {
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
		console.log('--- setAsCurrentWorkflow -----------------------');
		console.log(state);
		console.log(workflowName);
		state.workflows.forEach(function(item, index) {
			if (item.name === workflowName) {
				state.currentWorkflow = index;
			}
		});
	}
};

export default {
	state,
	getters,
	mutations
};
