import {fsClient} from '../backend-apis/familysearch/fsclient';
import {cookiesUtil} from '../backend-apis/familysearch/cookies';

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

		console.log(cookiesUtil);
		debugger;

		// 1. See if the user just logged in (i.e., the current URL has a 'code' parameter returned from oauth2 login
		//
		// Note: It is safe to call oauthResponse even if a login hasn't occurred because oauthResponse does nothing if the URL does not contain a 'code' parameter
		fsClient.oauthResponse(function(error, response){
			if(response){
				if(response.statusCode === 200){

					const accessToken = response.data.access_token;

					fsClient.get('/platform/users/current', function(error, response){
						if(error){
							console.error(error);
						} else {
							commit('setLoginCredentials', {
								username: 		response.data.users[0].contactName,
								accessToken: 	accessToken,
							});
							cookiesUtil.setItem('username', response.data.users[0].contactName, 24*60*60);
							cookiesUtil.setItem('accessToken', accessToken, 24*60*60);
							window.location = window.location.pathname;
						}
					});
				}
			} else {
				console.log(error);
			}
		});

		// 2. See if username and accessToken are stored in a cookie
		if (cookiesUtil.getItem('username')) {
			commit('setLoginCredentials', {
				username: 		cookiesUtil.getItem('username'),
				accessToken: 	cookiesUtil.getItem('accessToken'),
			});
		}
	},
	// Function is called when the user clicks the "Sign In" button.
	login() {
		// Redirect the user to the FamilySearch OAuth page
		fsClient.oauthRedirect();
		// we don't return here
	},
	logout({ commit }) {
		fsClient.deleteAccessToken();
		commit('clearLoginCredentials');
		cookiesUtil.removeItem('username',);
		cookiesUtil.removeItem('accessToken');
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
};
