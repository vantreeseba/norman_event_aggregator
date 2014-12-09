'use strict';

var buildLocation = './src/public/_WebAngular';
var buildConfig = {root: './src/public/_WebAngular'};

var WebAngularResource = {
    get: function get(req, res) {
        res.sendfile('index.html', buildConfig);
    },
    index: function index(req, res) {
        res.sendfile('index.html', buildConfig);
    }
};

module.exports = WebAngularResource;