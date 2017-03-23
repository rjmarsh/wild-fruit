import express from 'express';
import { port } from './config';
import bodyParser from 'body-parser';

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

server
	.use(bodyParser.urlencoded({ extended: true }))
	.use(bodyParser.json())
	// static assets
	.use('/', express.static('./static'))
	.use('/static', express.static('./static'))
	.use(errHandler);

server.listen(port, function () {
	/* eslint-disable no-console */
	console.log(`The server is running at http://localhost:${port}/`);
});
