import cookiesUtil from './cookies';
import FamilySearch from 'fs-js-lite';
import { FSenvironment, FSappkey } from './config';

const client = new FamilySearch({
	environment: FSenvironment,
	appKey: FSappkey,
	redirectUri: document.location.protocol + '//' + document.location.host + '/',
	saveAccessToken: true,
	tokenCookie: 'FS_AUTH_TOKEN',
	maxThrottledRetries: 10,
});


export default {
	getUser() {
		// In this next section we are populating the username in the header.
		// First we check if the username is stored in a cookie. If we are logged in
		// (have an access token) but don't have a username then we request the
		// current user from the API and save the username in a cookie.
		return new Promise(function(resolve,reject) {
			debugger;
			if(cookiesUtil.getItem('username')) {
				return resolve({
					username: cookiesUtil.getItem('username'),
				});
			}
			if(!client.hasAccessToken()){
				return reject("Username not found")
			}

			return client.getCurrentUser().then(function(response){
				const username = response.getUser().getContactName();
				cookiesUtil.setItem('username', username, 86400);
				return {
					username: username,
				};								// might need to resolve rather than return
			});
		});
	},
	// Function is called when the user clicks the "Sign In" button.
	login() {
		// Redirect the user to the FamilySearch OAuth page
		client.oauthRedirect();
		// we don't return here
	},
	logout() {
		// clear cookie here
		client.deleteAccessToken();
	},
};
