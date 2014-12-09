'use strict';
var env = process.env.NODE_ENV || 'local';
var config = require('../config/' + env);

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', config.allowedDomains);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

module.exports = allowCrossDomain;
