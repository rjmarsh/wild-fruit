import FamilySearch from 'fs-js-lite';
import {FSenvironment, FSappkey} from './config';

const state = {
	username: '',	// for display in the header.vue
	accessToken: '',
	client: new FamilySearch({
		environment: FSenvironment,
		appKey: FSappkey,
		redirectUri: document.location.protocol + '//' + document.location.host + '/',
//		redirectUri: document.location.protocol + '//' + document.location.host + '/familysearch/authentication-redirect-end',
 		saveAccessToken: true
	}),
};

const mutations = {
	login(state, info) {
		state.username = info.username;
		state.accessToken = info.accessToken;
	},
	logout(state) {
		state.username = '';
		state.accessToken = '';
	},
	setUsername(state, username) {
		state.username = username;
	},
};

export default {
	state,
	mutations
};
