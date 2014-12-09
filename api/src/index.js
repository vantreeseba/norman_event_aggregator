var express = require('express');
var app = express();
var port = process.env.port || 8080;


var router = express.Router();
var routes = require('./routes');

routes.configure(router);

app.use('/', router);

app.listen(port);
console.log('API listening on: ' + port);
