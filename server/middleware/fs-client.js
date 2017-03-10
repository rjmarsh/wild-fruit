import FamilySearch from 'fs-js-lite';
import {FSenvironment, FSappkey, port} from '../config';

let fsClient;

// Middleware that sets up the FS sdk.
module.exports = function(req, res, next){

  // We wrap it in a try/catch block because config will throw an exception
  // if the setting doesn't exist.
  try {

    if (!fsClient) {

      const domain = req.protocol + '://' + req.hostname;

	  fsClient = new FamilySearch({
		environment: FSenvironment,
		appKey: FSappkey,
		redirectUri: `${domain}:8080/auth/oauth-redirect`,
		saveAccessToken: false
	  });
	}

	req.fs = fsClient;

    // Load the token if it's saved in the session
    if(req.session && req.session.fs_token){
      req.fs.setAccessToken(req.session.fs_token);
    }
  } catch(e){
    return next(e);
  }

  next();
};
