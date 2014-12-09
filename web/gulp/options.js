'use strict';
var options = {
    //TODO: Emit from warp9.json, and make it the appname!
    appName: 'WebAngular',
    appOutput: './src/public/_WebAngular',
    appServer: './src/server/WebAngular.js',
    specs: {
        sources: ['./src/server/**/*.js', '!./src/server/lib/**', '!./src/server/config/**'],
        tests: ['./test/unit/server/**/*.js'],
        coverageFolder: 'reports/coverage'
    },
    karmaConfigLocal: 'test/config/karma.conf.local.js',
    karmaConfigSingle: 'test/config/karma.conf.single.js',
    w9: require('../.warp9.json')
};

module.exports = options;