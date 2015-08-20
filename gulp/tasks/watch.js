var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'scripts'
  ]);

  gulp.watch(['app/index.html', 'app/views/**/*.html'], [
    'views'
  ]);

  gulp.watch(['app/styles/**/*.scss'], [
    'styles'
  ]);
});