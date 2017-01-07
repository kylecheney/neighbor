//Dependencies//
const gulp = require ('gulp');
const concat = require ('gulp-concat');
const babel = require ('gulp-babel');
const sass = require ('gulp-sass');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

//Recurring Variables//
const jsPaths = ['.public/js/app.js', './public/js/*.js'];
const stylePaths = ['./public/styles/reset.scss', './public/styles/*.scss'];

//Gulp Tasks//

gulp.task('concatJS', function() {
  return gulp.src(jsPaths)
  .pipe(concat('bundle.js'))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./public/dist'))
});

gulp.task('concatSCSS', function() {
  return gulp.src(stylePaths)
  .pipe (sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public/dist'))
});

gulp.task('nodemon',  function() {
  nodemon({
    script: 'server/index.js'
  })
})

gulp.task('default', ['concatJS', 'concatSCSS', 'nodemon'])

gulp.watch(jsPaths, ['concatJS']);
gulp.watch(stylePaths, ['concatSCSS']);


//
// gulp.task('browserify', function() {
//   browserSync.init({
//     server: {
//       baseDir: "./"
//     }
//   });
// })


// gulp.task('default', ['browser-sync'], function () {
// });
//
// gulp.task('browser-sync', ['nodemon'], function() {
// 	browserSync.init(null, {
// 		proxy: "http://localhost:5000",
//         files: ["public/**/*.*"],
//         browser: "chrome",
//         port: 8080,
// 	});
// });
// gulp.task('nodemon', function (cb) {
//
// 	var started = false;
//
// 	return nodemon({
// 		script: 'app.js'
// 	}).on('start', function () {
// 		if (!started) {
// 			cb();
// 			started = true;
// 		}
// 	});
// });
