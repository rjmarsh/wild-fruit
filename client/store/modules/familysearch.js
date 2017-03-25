import fsClient from './../../familysearch/fsclient';

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

const actions = {
	checkFamilySearchLoginStatus ({ commit }) {

		// 1. See if the user just logged in (i.e., the current URL has a 'code' parameter returned from oauth2 login
		//
		// Note: It is safe to call oauthResponse even if a login hasn't occurred because oauthResponse does nothing if the URL does not contain a 'code' parameter
		fsClient.get().oauthResponse(function(error, response){
			if(response){
				if(response.statusCode === 200){

					const accessToken = response.data.access_token;

					fsClient.get().get('/platform/users/current', function(error, response){
						if(error){
							console.error(error);
						} else {
							commit('setLoginCredentials', {
								accessToken: 	accessToken,
								username: 		response.data.users[0].contactName,
							});
						}
					});
				}
			} else {
				console.log(error);
			}
		});

	},
	// Function is called when the user clicks the "Sign In" button.
	login() {
		// Redirect the user to the FamilySearch OAuth page
		fsClient.get().oauthRedirect();
		// we don't return here
	},
	logout({ commit }) {
		// clear cookie here
		fsClient.get().deleteAccessToken();
		commit('clearLoginCredentials');
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
};
