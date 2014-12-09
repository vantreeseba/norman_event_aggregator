var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

function jshintTask() {
    var src = [
        'src/**/*.js',
        '!src/public/_WebAngular/*'
    ];

    return gulp
        .src(src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
}

gulp.task('jshint', jshintTask);