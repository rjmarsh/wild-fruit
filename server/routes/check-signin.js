import express from 'express';
import fsClient from '../middleware/fs-client';
var router = express.Router();

// Setup the FS sdk client before handling any requests on this router.
router.use(fsClient);


// On sign out we just destroy the session and forward to the home page.
// We don't try to invalidate the FS access token.
router.get('/', function(req, res, next) {

	console.log('/auth/check-signin');

	req.session.user = '';

	if(req.session.fs_token){
		if(!req.session.user){
			req.fs.get('/platform/users/current', function(error, userResponse){
				if(userResponse.statusCode === 200){
					console.log(userResponse);
//					console.log(JSON.parse(userResponse.body.users));
//					res.send(userResponse.data.users[0]);
				} else {
					console.log(`Unexpected current user response: ${userResponse.statusCode} ${userResponse.statusText}`);
				}
			});
		}
	}

	res.send('');
});

module.exports = router;
