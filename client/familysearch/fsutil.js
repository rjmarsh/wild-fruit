import cookiesUtil from './cookies';
import FamilySearch from 'fs-js-lite';


export default {
	getClient() {
		return fsClient;
	},
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
			if(!fsClient.hasAccessToken()){
				return reject("Username not found")
			}

			return fsClient.getCurrentUser().then(function(response){
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
		this.$store.state.familysearch.fsClient.oauthRedirect();
		// we don't return here
	},
	logout() {
		// clear cookie here
		fsClient.deleteAccessToken();
	},
};
