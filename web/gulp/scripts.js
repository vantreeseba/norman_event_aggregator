'use strict';
var gulp = require('gulp');

require('./script/core.js');
require('./script/common.js');
require('./script/features.js');
require('./script/compatibility.js');
require('./script/localdev.js');

var scripts = [
    'script-core',
    'script-common',
    'script-features',
    'script-compatibility'
    //'script-localdev'
];

gulp.task('scripts', scripts);
