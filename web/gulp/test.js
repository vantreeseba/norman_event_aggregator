var gulp = require('gulp');

require('./test/test-server');
require('./test/test-client');
require('./test/coverage');

gulp.task('test', ['test-server', 'test-client-single', 'coverage']);