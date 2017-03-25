import FamilySearch from 'fs-js-lite';
import {FSenvironment, FSappkey} from './config';

const fsClient = new FamilySearch({
	environment: FSenvironment,
	appKey: FSappkey,
	redirectUri: document.location.protocol + '//' + document.location.host + '/',
//		redirectUri: document.location.protocol + '//' + document.location.host + '/familysearch/authentication-redirect-end',
	saveAccessToken: true,
});

export default {
	get() {
		return fsClient;
	},
};
