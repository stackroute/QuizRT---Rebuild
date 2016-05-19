var gulp = require('gulp');
var mocha = require('gulp-mocha');
gulp.task('test',function(){
 gulp.src(['./test/*.spec.js','!node_modules/**/*'])
 .pipe(mocha());
});

// gulp.task('build',['test']);
//
// gulp.task('default',['build']);
