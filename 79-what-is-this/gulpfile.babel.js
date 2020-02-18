const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const prefix      = require('gulp-autoprefixer');
const concat      = require('gulp-concat');
const babel       = require('gulp-babel');

const startServer = (done) => {
  browserSync.init({
    server: "./",
    port: 2314
  })
  done()
}

const browserSyncReload = (done) => {
  browserSync.reload()
  done()
}

const compileScripts = () => { 
  return gulp.src(['js/*.js', 'js/custom.js'])
  .pipe(babel({
    "presets": [ "@babel/preset-env" ]
  }))
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.reload({ stream:true }))
}

const compileStyles = () => {
  return gulp.src('scss/styles.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 2 versions'], { cascade: true }))
  .pipe(gulp.dest('./'))
  .pipe(browserSync.reload({ stream:true }))
}

const watchMarkup = () => {
  gulp.watch(['index.html'], browserSyncReload);
}

const watchScripts = () => {
  gulp.watch(['js/*.js'], compileScripts);
}

const watchStyles = () => { 
  gulp.watch(['scss/*.scss'], compileStyles)
}

const compile = gulp.parallel(compileScripts, compileStyles)
compile.description = 'compile all sources'

// Not exposed to CLI
const serve = gulp.series(compile, startServer)
serve.description = 'serve compiled source on local server at port 2314'

const watch = gulp.parallel(watchMarkup, watchScripts, watchStyles)
watch.description = 'watch for changes to all source'

const defaultTasks = gulp.parallel(serve, watch)

export {
  compile,
  compileScripts,
  compileStyles,
  serve,
  watch,
  watchMarkup,
  watchScripts,
  watchStyles,
}

export default defaultTasks
