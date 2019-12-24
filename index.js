const port = 5000

const express = require('express');
const contentDisposition = require('content-disposition');
const log = console.log

var bodyParser = require('body-parser');
//var multer = require('multer');

//
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//log(multer);
//app.use(multer()); // for parsing multipart/form-data
function getClientIp(req) {
	return req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;
};
app.use((req,res,next)=>{
	let s = (getClientIp(req));
	let ip = s.substr(s.lastIndexOf(':')+1);
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
});

app.listen(port);
console.log(`app listen on ${port}`)
