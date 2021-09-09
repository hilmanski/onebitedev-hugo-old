---
title: "Minify CSS files with Gulp JS"
description: "Learn how to Minify CSS files with Gulp JS to make it load faster"
date: 2021-09-10T19:48:00.000Z
topic: [gulpjs]
series: ["Automate frontend task with GulpJS"]
draft: false
---
Learn how to Minify CSS files with Gulp JS to make it load faster.  
We will use [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)

## Using Gulp Clean CSS
install
```
npm install gulp-clean-css --save-dev
```

basic usage
```
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
```

## Combine it with previous example

We've seen [how to combine multiple CSS files into a single file](https://onebite.dev/combine-multiple-css-files-with-gulpjs/)  
Let's combine it with this minify process

```
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function cssTask() {
    return gulp.src('dev/css/*.css')
             .pipe(concat('style.css'))
             .pipe(cleanCSS({compatibility: 'ie8'}))
             .pipe(gulp.dest('dist/css'))
}
exports.default = cssTask
```

## Show source map (original CSS file)
For easier debugging, we sometimes play with inspect element in browser, but after minifying our CSS file, it's hard to see them again.  
That's why we will allow [sourcemap](https://www.npmjs.com/package/gulp-sourcemaps)

Install gulp sourcemap
```
npm i gulp-sourcemaps --save-dev
```

Use it
```
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps'); //newly added

function cssTask() {
    return gulp.src('dev/css/*.css')
             .pipe(sourcemaps.init()) //newly added
             .pipe(concat('style.css'))
             .pipe(cleanCSS({compatibility: 'ie8'}))
             .pipe(sourcemaps.write('.')) //newly added
             .pipe(gulp.dest('dist/css'))
}
exports.default = cssTask
```


