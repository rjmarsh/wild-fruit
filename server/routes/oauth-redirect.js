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

    console.log(router);

/*    debugger;
    fsClient.getCurrentUser().then(function(response) {
	  var username = response.getUser().getContactName();
	  // how do I get this username into my vue header?
      console.log(username);
	});

	  debugger; */
//	cookiesUtil('fsaccesstoken', tokenResponse.data.access_token, 24*60*60);

    res.redirect('/');
  });
});

module.exports = router;
