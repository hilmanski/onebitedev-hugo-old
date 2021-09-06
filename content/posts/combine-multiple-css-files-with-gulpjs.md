---
title: "Combine multiple CSS files with GulpJS"
description: "Learn how to combine multiple CSS files into one file with GulpJS, it's useful to make sure our HTML will only request for one file later (reduce request time)"
date: 2021-09-06T23:08:00.000Z
topic: [gulpjs]
series: ["Automate frontend task with GulpJS"]
draft: false
---
Learn how to combine multiple CSS files into one file with GulpJS, it's useful to make sure our HTML will only request for one file later (reduce request time).

## Our case
Assume we have two different CSS files.  
Maybe you want to separate the concerns, like one file for homepage, one file for single page.  
Or in my case, I sometimes, download any utility CSS, such as gridcss. I try not to mix my custom CSS with other files.

## Organize our directory
I normally  make `dev` folder to put all files related during development.  
Create new dev folder and other folder's we need
```
mkdir dev
cd dev
mkdir css
mkdir js
```
With above command, we create new dev folder with 2 more folders inside, CSS and JS.

## Write CSS task in gulpjs
Before we write in gulpjs files, let's install gulp-concat package
```
npm install --save-dev gulp-concat
```
Now in our gulpjs file
```
const gulp = require('gulp');
const concat = require('gulp-concat');

function cssTask() {
    return gulp.src('dev/css/*.css')
             .pipe(concat('style.css'))
             .pipe(gulp.dest('dist/css'))
}
exports.default = cssTask
```

We define a new function called cssTask (name it whatever you want)  
It need 3 things: source of the file, the job and destination.  
We tell gulp, that we load every CSS on `dev/css` folder  
and concate (combine) it into one file called `style.css`
and save it inside `dist/css` folder.  

In your HTML files, don't forget to adjust the CSS location to the new dist/css folder.

## Run gulp task
In command line, type
```
gulp
```
If you don't see any error, it means everything is done!


