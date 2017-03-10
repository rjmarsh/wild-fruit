import express from 'express';
import fsClient from '../middleware/fs-client';

var router = express.Router();

// Setup the FS sdk client before handling any requests on this router.
router.use(fsClient);


router.get('/', function(req, res, next) {

  console.log(req.fs);

  req.fs.oauthToken(req.query.code, function(error, tokenResponse){

    if(error || tokenResponse.statusCode >= 400){
      return next(error);
    }

    const getUsername = req.fs.getCurrentUser().then(function(response) {
	  var username = response.getUser().getContactName();
      console.log(username);
      return username;
	});

//	cookiesUtil('fsaccesstoken', tokenResponse.data.access_token, 24*60*60);

	getUsername.then(function(username) {
		res.redirect('/');
	}).catch(next);
  });
});

module.exports = router;
