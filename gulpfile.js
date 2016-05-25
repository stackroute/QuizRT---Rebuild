var gulp = require('gulp');
var mocha = require('gulp-mocha')
var concat = require('gulp-concat')
gulp.task('default',['Testing','Check']);
gulp.task('Testing',function(){
  gulp.src(['./microservices/topics/*.spec.js','!node_modules/**/*'])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('build'))
})
gulp.task('Check',function(){
  console.log('Check');
})
