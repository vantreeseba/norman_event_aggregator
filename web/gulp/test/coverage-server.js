var gulp = require('gulp');
var options = require('./../options');
var istanbul = require('gulp-istanbul');
var runner = require('gulp-mocha');
var path = require('path');

function coverageServer(cb) {
    gulp.src(options.specs.sources)
        .pipe(istanbul()) // Covering files
        .on('end', function () {
            gulp.src(options.specs.tests)
                .pipe(runner())
                .pipe(istanbul.writeReports(options.specs.coverageFolder)) // Creating the reports after tests run
                .on('end', cb);
        });
}

gulp.task('coverage-server', coverageServer);