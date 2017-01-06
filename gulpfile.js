//Dependencies//
const gulp = require ('gulp');
const concat = require ('gulp-concat');
const babel = require ('gulp-babel');
const sass = require ('gulp-sass');

//Recurring Variables//
const jsPaths = ['.public/js/app.js', './public/**/*.js'];
const stylePaths = ['./public/styles/reset.scss', './public/**/*.scss'];

//Gulp Tasks//
gulp.task('concatJS', function() {
  return gulp.src(jsPaths)
  .pipe(concat('bundle.js'))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./dist'))
});

gulp.task('concatSCSS', function() {
  return gulp.src(stylePaths)
  .pipe (sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'))
});

gulp.watch(jsPaths, ['concatJS']);
gulp.watch(stylePaths, ['concatSCSS']);

gulp.task('default', ['concatJS', 'concatSCSS']);
