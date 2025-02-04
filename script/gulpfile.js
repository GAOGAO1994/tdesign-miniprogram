const gulp = require('gulp');
const dist = require('./gulpfile.dist');
const example = require('./gulpfile.example');

/** `gulp build`
 * 构建
 * */
const build = gulp.series(dist.build, example.build);

/** `gulp watch`
 * 监听
 * */
const watch = gulp.parallel(dist.watch, example.watch);

/** `gulp` or `gulp dev`
 * 构建并监听
 * */
const dev = gulp.series(build, watch);

// `gulp --tasks --gulpfile script/gulpfile.js` list tasks
module.exports = {
  dev,
  build,
  watch,
  default: dev,
};
