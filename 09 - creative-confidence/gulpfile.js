var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');

/**
 * Launch the Server
 */
gulp.task('browser-sync', ['sass'], function() {
  browserSync.init({
    server: "./",
    port: 4320
  });
});

/**
 * Compile files from scss
 */
gulp.task('sass', function () {
  return gulp.src('scss/styles.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('sass-prod', function () {
  return gulp.src('scss/styles.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cssnano())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.reload({stream:true}))
});

/**
 * Reload page when html changes
 */
gulp.task('html', function () {
  browserSync.reload();
});

/**
 * Watch scss files for changes & recompile
 * Watch js files for changes & concatenate
 * Watch html files, reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['scss/*.scss'], ['sass']);
  gulp.watch(['index.html'], ['html']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the scripts, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['sass-prod']);
