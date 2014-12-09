var gulp = require('gulp');
var jsonlint = require('gulp-jsonlint');

function lintTask() {

    var src = [
        'src/**/*.json',
        '!src/public/_WebAngular/*'
    ];

    return gulp
        .src(src)
        .pipe(jsonlint())
        .pipe(jsonlint.reporter());
}

gulp.task('jsonlint', lintTask);
