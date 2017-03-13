import express from 'express';
import fsClient from '../middleware/fs-client';

var router = express.Router();

// Setup the FS sdk client before handling any requests on this router.
router.use(fsClient);


router.get('/', function(req, res, next) {

	console.log('/auth/oauth-redirect');

	req.fs.oauthToken(req.query.code, function (error, tokenResponse) {

      if (error || tokenResponse.statusCode >= 400) {
        return next(error);
      }

      req.session.fs_token = tokenResponse.data.access_token;
      req.session.save(function(){
        res.redirect('/');
      });
    });
});

module.exports = router;
