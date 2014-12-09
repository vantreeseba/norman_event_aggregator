'use strict';
var routes = require('./routes');

var resources = {
    register: function register(WebAngular) {
        var WebAngularResource = require('./resources/WebAngular/WebAngularResource');
	
	    WebAngular.get(routes.home, WebAngularResource.index);
        WebAngular.get(routes.WebAngular, WebAngularResource.get);
	
		
    }
};

module.exports = resources;
