var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('views', function () {
  gulp.src('app/index.html')
    .pipe(gulp.dest('public/'))
    .pipe(server.notify());

  gulp.src('app/views/**/*')
    .pipe(gulp.dest('public/views/'))
    .pipe(server.notify());
});