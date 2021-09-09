---
title: "Add Browser Sync in Gulpjs Project"
description: "How can we auto reload pages when certain changes happen? we can combine the power of browser sync and gulpjs"
date: 2021-09-16T23:08:00.000Z
topic: [gulpjs]
series: ["Automate frontend task with GulpJS"]
draft: false
---
How can we auto reload pages when certain changes happen? we can combine the power of browser sync and gulpjs

## Install browsersync
Assume you already have gulp installed
```
npm install browser-sync --save-dev
```

Basic usage
```
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// or...

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});
```
## How I use it

Here is browsersync sample usage in one of my project using gulp js combine with all previous tasks we've seen in our [gulp series](https://onebite.dev/series/automate-frontend-task-with-gulpjs/)
```
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const order = require("gulp-order");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const cssPath = 'dev/css/*.css'
const jsPath = 'dev/js/*.js'
const imgPath = 'dev/img/*'

function syncBrowser(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    done()
}

function reload(done) {
    browserSync.reload()
    done()
}

function cssTask() {
    return gulp.src(cssPath)
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
}

function jsTask() {
    return gulp.src(jsPath)
        .pipe(order([
            'dev/js/sweetalert.min.js',
            'dev/js/custom.js',
        ], { base: './' }))
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
}

function imgTask() {
    return gulp.src(imgPath)
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'))
}

function watchTask() {
    gulp.watch(cssPath, gulp.series(cssTask, reload))
    gulp.watch(jsPath, gulp.series(jsTask,reload))
    // gulp.watch([cssPath, jsPath], gulp.parallel(cssTask, jsTask))
}

exports.default = gulp.series(
    syncBrowser,
    gulp.parallel(cssTask, jsTask, imgTask),
    watchTask
)
```