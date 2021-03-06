const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')

gulp.task('uglify', () => {
  gulp.src('src/static/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('gta5_collect_map/static'))
  gulp.src('src/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('gta5_collect_map'))
  gulp.src('src/static/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('gta5_collect_map/static'))
})
