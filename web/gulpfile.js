'use strict';
var gulp = require('gulp');
var help = require('gulp-task-listing');


require('./gulp/styles.js');
require('./gulp/partials.js');
require('./gulp/index.js');
require('./gulp/statuspages.js');
require('./gulp/scripts.js');


require('./gulp/build.js');
require('./gulp/watch.js');

require('./gulp/livereload.js');
require('./gulp/serve.js');

require('./gulp/test/coverage.js');
require('./gulp/test');
require('./gulp/jshint');
require('./gulp/jsonlint');

gulp.task('help', help);
gulp.task('default', ['help']);