var gulp = require('gulp');
var browserify = require('browserify');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var server = require('gulp-express');
var babelify = require('babelify');

gulp.task('scripts', function() {

  browserify('app/scripts/app.js', { debug: true })
    .transform(babelify)
    .bundle()
    .on('error', function (e) { console.log('Error: ' + e.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(server.notify());
});