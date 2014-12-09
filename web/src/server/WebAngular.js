'use strict';
var express = require('express');
var middleware = require('./middleware');
var resources = require('./resources');

//app
var WebAngular = express();

//config
var env = WebAngular.get('env') || 'local';
var config = require('./config/' + env);

function registerMiddleware() {
    middleware.register(this);
}

WebAngular.configure(registerMiddleware);
resources.register(WebAngular);

console.log('Running: ', env);
console.log('Port: ', config.port);

WebAngular.listen(config.port);
