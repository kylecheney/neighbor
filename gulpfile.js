//Dependencies//
const gulp = require ('gulp');
const concat = require ('gulp-concat');
const babel = require ('gulp-babel');

//Recurring Variables//
const jsPaths = ['./public/js/app.js', './public/**/*.js'];
const stylePaths = ['./public/styles/reset.css', './public/**/*.css'];

//Gulp Tasks//
gulp.task('concatAngular', function() {
  gulp.src(jsPaths)
  .pipe(concat('allAngular.js'))
  .pipe(gulp.dest('./dist/javaScript'))
});

gulp.task('es6', function() {
  gulp.src(jsPaths)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./dist/javaScript/es6-babel'))
});

gulp.task('concatStyles', function() {
  gulp.src(stylePaths)
  .pipe(concat('all.css'))
  .pipe(gulp.dest('./dist/styles'))
});
