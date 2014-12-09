'use strict';
var express = require('express');
var path = require('path');
var allowCrossDomain = require('./middleware/allowCrossDomain');
var resourceNotFound = require('./middleware/resourceNotFound');

var middleware = {
    register : function (WebAngular) {
    
        var sourcePath = path.dirname(__dirname),
            publicDir = path.join(sourcePath, '/public/'),
            compressOpts = {
                threshold: 512,
                memLevel: 9,
                level: 5
            };
    
        WebAngular.use(express.compress(compressOpts));
        WebAngular.use(allowCrossDomain);
        WebAngular.use(express.static(publicDir));  
        WebAngular.use(express.json());
        WebAngular.use(express.urlencoded());

		WebAngular.use(WebAngular.router);
		
		WebAngular.use(resourceNotFound);
    }
};

module.exports = middleware;
