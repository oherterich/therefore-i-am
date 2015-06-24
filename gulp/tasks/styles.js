var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var server = require('gulp-express');

gulp.task('styles', function() {
  gulp.src('app/styles/*.scss')
    .pipe(sass({ onError: function(e) { console.log(e); }}))
    .pipe(autoprefixer( "last 2 versions", "> 1%", "ie 8"))
    .pipe(gulp.dest('public/css/'))
    .pipe(server.notify());
});