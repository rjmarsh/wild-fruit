
const state = {
	username: '',	// to be displayed in the header.vue
	accessToken: '',
};

const getters = {
	username: state => state.username,
	accessToken: state => state.accessToken,
	client: state => state.client,
};

const mutations = {
	setLoginCredentials(state, info) {
		state.username = info.username;
		state.accessToken = info.accessToken;
	},
	clearLoginCredentials(state) {
		state.username = '';
		state.accessToken = '';
	},
};

export default {
	state,
	getters,
	mutations,
};
