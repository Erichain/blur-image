/**
 */
'use strict';

/* packages */
const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const openURL = require('gulp-open');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const rimraf = require('rimraf');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');

    /* define root app */
const rootApp = {
        app: '.',
        dist: 'dist'
    },

    /* files paths */
    paths = {
        scripts: [`${rootApp.app}/src/blur-image.js`],
        styles: [`${rootApp.app}/src/blur-image.css`],
        views: {
            main: `${rootApp.app}/example/index.html`
        }
    };

gulp.task('lint:scripts', () => {
    gulp.src(paths.scripts)
        .pipe(connect.reload());
});

gulp.task('html', () => {
    gulp.src(paths.views.main)
        .pipe(connect.reload());
});

gulp.task('start:server', () => {
    connect.server({
        root: [rootApp.app],
        livereload: {
            port: 35730
        },
        port: 9007
    });
});

gulp.task('start:client', ['start:server'], () => {
    var options = {
        uri: 'http://0.0.0.0:9007/example/',
        app: 'Google Chrome'
    };

    gulp.src(paths.views.main)
        .pipe(openURL(options));
});

gulp.task('watch', () => {
    gulp.watch(paths.views.main, ['html']);
    gulp.watch(paths.styles, ['compress']);
    gulp.watch(paths.scripts, ['lint:scripts', 'compress']);
});

gulp.task('serve', ( cb ) => {
    runSequence(
        ['lint:scripts'],
        ['start:client'],
        'watch', cb)
});


gulp.task('clean:dist', ( cb ) => {
    rimraf(`${rootApp.app}/dist`, cb)
});


// compress js and css and rename them
gulp.task('compress', () => {
    gulp.src(`${rootApp.app}/src/blur-image.js`)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(`${rootApp.app}/dist`))
        .pipe(uglify())
        .pipe(rename(function ( path ) {
            path.extname = '.min.js'
        }))
        .pipe(gulp.dest(`${rootApp.app}/dist`));

    gulp.src(paths.styles)
        .pipe(gulp.dest(`${rootApp.app}/dist`))
        .pipe(cssnano())
        .pipe(rename(function ( path ) {
            path.extname = '.min.css'
        }))
        .pipe(gulp.dest(`${rootApp.app}/dist`))
});

gulp.task('build', ( cb ) => {
    runSequence(
        'clean:dist',
        ['compress'],
        cb
    )
});

gulp.task('default', ['serve']);
