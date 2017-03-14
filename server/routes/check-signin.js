import express from 'express';
import fsClient from '../middleware/fs-client';
var router = express.Router();

// Setup the FS sdk client before handling any requests on this router.
router.use(fsClient);

// On sign out we just destroy the session and forward to the home page.
// We don't try to invalidate the FS access token.
router.get('/', function(req, res, next) {

	console.log('/auth/check-signin');

	new Promise((resolve, reject) => {
		if(req.session.user) {
			return resolve(req.session.user);
		}

		if(!req.session.fs_token) {
			return resolve('');
		}

		req.fs.get('/platform/users/current', function(error, userResponse){
			if(userResponse.statusCode === 200){
				req.session.user = JSON.parse(userResponse.body).users[0].contactName;
				return resolve(req.session.user);
			} else {
				return reject(new Error(`Unexpected current user response: ${userResponse.statusCode} ${userResponse.statusText}`));
			}
		});
	}).then(username => {
		res.send(username);
	}).catch(next);
});

module.exports = router;
