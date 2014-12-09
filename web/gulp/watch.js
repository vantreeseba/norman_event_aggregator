var gulp = require('gulp'),
    options = require('./options.js'),
    livereload = require('./livereload.js'),
    watch = require('gulp-watch'),
    mocha = require('gulp-mocha');

function watchStyles() {
    'use strict';
    var src = ['./src/public/styles/**/*.styl'];

    gulp.watch(src, ['styles']);
}

function watchScripts() {
    'use strict';
    var src = [
        'src/public/localdev/**/*.js',
        'src/public/scripts/**/*.js',
        'src/public/features/**/*.js',
        'src/public/common/**/*.js'
    ];

    gulp.watch(src, ['scripts']);
}

function watchPartials() {
    'use strict';
    var src = ['src/public/features/**/*-partial.html', 'src/public/common/*.html'];

    gulp.watch(src, ['partials']);
}

function watchIndex() {
    'use strict';
    var src = ['src/public/common/index/index.*.html'];

    gulp.watch(src, ['index']);
}

function watchStatusPages() {
    'use strict';
    var src = ['src/public/common/statuspages/*.html'];

    gulp.watch(src, ['statuspages']);
}

function watchServer() {
    'use strict';
    var src = ['test/unit/server/**/*.js', 'src/server/features/**/*.js'];

    watch({glob: src, emit: 'all' }, function(files) {
            files
            .pipe(mocha({ reporter: 'spec' }))
            .on('error', function(err) {
                if (!/tests? failed/.test(err.stack)) {
                    console.log(err.stack);
                }
            })
    });
}

gulp.task('watch-styles', watchStyles);
gulp.task('watch-scripts', watchScripts);
gulp.task('watch-partials', watchPartials);
gulp.task('watch-index', watchIndex);
gulp.task('watch-status-pages', watchStatusPages);
gulp.task('watch-server', watchServer);
gulp.task('watch', [
    'buildWatch',
    'watch-styles',
    'watch-scripts',
    'watch-partials',
    'watch-index',
    'watch-status-pages',
    'watch-server',
    'test-client',
    'serve',
    'livereload'
]);