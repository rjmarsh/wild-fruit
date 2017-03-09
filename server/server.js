import express from 'express';
import { port } from './config';
import bodyParser from 'body-parser';
import session from 'express-session';

const FileStore = require('session-file-store')(session);

const server = express();

const errHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(err); // eslint-disable-line no-console
  const statusCode = err.status || 500;
  res.status(statusCode);
  res.send({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  });
};

var sess_options = {
	path: "./sessions/",  //directory where session files will be stored
	useAsync: true,
	reapInterval: 5000,
	maxAge: 10000
};

server
	.use(session({
      store: new FileStore(sess_options),
      secret: 'keyboard cat'
	}))
// api
	.use(bodyParser.urlencoded({ extended: true }))
	.use(bodyParser.json())
	.use('/auth/signin', require('./routes/signin'))
	.use('/auth/signout', require('./routes/signout'))
	.use('/auth/oauth-redirect', require('./routes/oauth-redirect'))
	// static assets
	.use('/', express.static('./static'))
	.use('/static', express.static('./static'))
	.use(errHandler);

server.listen(port, function () {
	/* eslint-disable no-console */
	console.log(`The server is running at http://localhost:${port}/`);
});
