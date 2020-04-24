"use strict";


// Load plugins
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const concat = require('gulp-concat');
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");


// BrowserSync
function browserSync(done) {
  browsersync.init({
    proxy: 'http://localhost:8088/'
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./www/"))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./www/"))
    .pipe(browsersync.stream());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src(["./src/js/**/*"])
      .pipe(plumber())
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest("./www/"))
      .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest("./www/"))
      .pipe(browsersync.stream())
  );
}

// Watch files
function watchFiles() {
  gulp.watch("./src/scss/**/*", gulp.series(css, browserSyncReload));
  gulp.watch("./src/js/**/*", gulp.series(scripts, browserSyncReload));
}

// define complex tasks
const js = gulp.series(scripts);
const build = gulp.series(gulp.parallel(css, js, watchFiles, browserSync));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = build;