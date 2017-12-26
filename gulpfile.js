var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {

  browserSync.init({
    server: "./"
  });

  // gulp.watch("./sass/main.scss", ['sass']);
  gulp.watch("./*.css").on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);