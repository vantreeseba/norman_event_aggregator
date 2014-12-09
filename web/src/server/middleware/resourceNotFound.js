'use strict';
var env = process.env.NODE_ENV || 'local';
var config = require('../config/' + env);
var buildLocation = './src/public/_WebAngular';
var buildConfig = {root: './src/public/_WebAngular'};

var resourceNotFound = function (req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.sendfile('404.html', buildConfig);
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({
            error: 'Not found'
        });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');

};

module.exports = resourceNotFound;