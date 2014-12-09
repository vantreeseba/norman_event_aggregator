var gulp = require('gulp');

require('./coverage-server');
require('./test-client');

gulp.task('coverage', ['coverage-server', 'test-client-single']);