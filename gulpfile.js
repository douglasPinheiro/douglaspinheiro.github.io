'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var minifyCss = require('gulp-minify-css');
 
gulp.task('jade', function() {
  gulp.src('./views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
});
 
gulp.task('sass', function () {
  gulp.src('./styles/sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./styles/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./styles/sass/*.sass', ['sass']);
  gulp.watch('./views/*.jade', ['jade']);
});