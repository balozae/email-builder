const gulp = require('gulp')
const sass = require('gulp-sass')
const connect = require('gulp-connect')
const concat = require('gulp-concat')
const include = require('gulp-file-include')
const inline = require('gulp-inline-css')
const del = require('rimraf')

function clean(done) {
  del.sync('build')
  del.sync('dist')
  done()
}

function css() {
  return gulp.src('src/styles/root.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/html/after-signup'))
    .pipe(connect.reload())
}

function html() {
  return gulp.src('src/html/**/*.html')
    .pipe(inline({
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: false,
      removeLinkTags: true,
      removeHtmlSelectors: true,
    }))
    .pipe(gulp.dest('dist'))
}

function htmlDev() {
  return gulp.src('src/html/**/index.html')
    .pipe(include({
      prefix: '{{ ',
      suffix: ' }}',
      basepath: '@file'
    }))
    .pipe(inline({
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: false,
      removeLinkTags: true,
      removeHtmlSelectors: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
}

function devServer(done) {
  connect.server({
    port: 8000,
    root: 'build',
    livereload: true
  })

  done()
}

function watch() {
  gulp.watch('src/styles/*.scss').on('all', gulp.series(css, htmlDev))
  gulp.watch('src/html/**/*.html').on('all', gulp.series(htmlDev))
}

gulp.task('dist', gulp.series(
  clean,
  gulp.parallel(css, html)
))

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(css, htmlDev)
))

gulp.task('default', gulp.series('build', devServer, watch))
