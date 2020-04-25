var paths = {
    styles: {
        src: "./src/scss",
        dest: "./www/css",
    },
    scripts: {
        src: "./src/js",
        dest: "./www/js",
        webpackconffile: "./webpack.config.js"
    }
};

var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    webpack = require("webpack"),
    webpackconfig = require(paths.scripts.webpackconffile),
    webpackstream = require("webpack-stream"),
    named = require('vinyl-named'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    t2 = require('through2'),
    replace = require('gulp-replace');

    sass.compiler = require('node-sass');



function scripts() {
    return gulp
        .src(paths.scripts.src+ '/*.js')
        .pipe(named()) 
        .pipe(webpackstream(webpackconfig), webpack).on('error', function() {
            console.error.bind(console);
            this.emit('end');
        })
        .pipe(gulp.dest(paths.scripts.dest))
        //.pipe(browserSync.stream()) //no need for this
} 


function watch() {
    browserSync.init({
        proxy: 'http://localhost:8088/overlay.html',
        files: [paths.styles.src + "/**/*.css"]
    });
    gulp.watch(paths.styles.src + '/**/*.scss', style);
    gulp.watch(paths.styles.src + '/**/*.scss', bustCache);
    gulp.watch(paths.scripts.src + "/**/*.js", scripts);
    gulp.watch(paths.scripts.src + '/**/*.js', bustCache);
    gulp.watch("./www/").on('change', browserSync.reload);
}


function bustCache() {
    var timeInMs = Date.now();
    console.log("refreshing cacheBuster with timeStamp: " + timeInMs);
    return gulp 
        .src(['./www/overlay.html'])
        .pipe(replace(/cache_buster=\d*/g, 'cache_buster=' +  timeInMs))
        .pipe(gulp.dest('./www/'))
}

function style(done) {
    return gulp
        .src(paths.styles.src + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .on("error", sass.logError)
        .pipe(t2.obj((chunk, enc, cb) => { // Execute through2
            let date = new Date();
            chunk.stat.atime = date;
            chunk.stat.mtime = date;
            cb(null, chunk);
        }))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(paths.styles.dest)); 
        done();
}



exports.bustCache = bustCache;
exports.watch = watch
exports.scripts = scripts;
exports.style = style;


//var build = gulp.parallel(scripts, style, watch);

var build = gulp.parallel(scripts, style, bustCache, watch);

gulp.task('default', build);