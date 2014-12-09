var gulp = require('gulp');
var options = require('./../options');
var mocha = require('gulp-mocha');
var path = require('path');

gulp.task('test-server', function() {
    gulp.src(options.specs.tests)
        .pipe( mocha ({  reporter: 'spec' 
        }));
});