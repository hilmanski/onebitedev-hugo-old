---
title: "Combine Multiple Javascript (JS) Files With GulpJS"
description: "Learn how to combine Multiple Javascript (JS) Files With GulpJS. Sometimes we want to separate our javascript file during development process to make it easy for use to maintain it. But in production we still want to only serve one file for faster request time."
date: 2021-09-12T19:58:00.000Z
topic: [gulpjs]
series: ["Automate Frontend Task With Gulpjs"]
draft: false
---
Learn how to combine Multiple Javascript (JS) Files With GulpJS. Sometimes we want to separate our javascript file during development process to make it easy for use to maintain it. But in production we still want to only serve one file for faster request time.

We'll be using same concat package as in our CSS lesson

For minifying our javascript file, we'll use [gulp-minify](https://www.npmjs.com/package/gulp-minify)
```
npm i --save-dev  gulp-minify
```

Let's write our javascript file in `gulpfile.js`
```
const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

function jsTask() {
    return gulp.src('dev/js/*.js') 
        .pipe(concat('main.js'))
        .pipe(minify()) //if we want to minify the javascript files
        .pipe(gulp.dest('dist/js'))
}

exports.default = jsTask
````

## Change the order of the file

Order of the function or variables in javascript is matter.  
Learn how to change the order of the files that we want to combine in javascript

First, install gulp order
```
npm i --save-dev gulp-order
```

Then use it in our task  
assume I have 2 files name sweetalert.min.js and custom.js (change with whatever your files are)
```
const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const order = require("gulp-order");

function jsTask() {
    return gulp.src('dev/js/*.js') 
        .pipe(order([
            'dev/js/sweetalert.min.js',
            'dev/js/custom.js',
        ], { base: './' }))
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
}

exports.default = jsTask
````


