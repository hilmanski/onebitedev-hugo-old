---
title: "Combine Tasks in Gulpjs With Parallel Function"
description: "Learn how to Combine Tasks in Gulpjs With Parallel and Series Function as your tasks grow"
date: 2021-09-14T23:08:00.000Z
topic: [gulpjs]
series: ["Automate frontend task with GulpJS"]
draft: false
---
As our project grows, the task lists on our gulpfile js file also getting bigger. We need to learn how to combine this tasks and run it with one script

## Compose gulp tasks with series
Luckily, we can [compose this tasks](https://gulpjs.com/docs/en/getting-started/creating-tasks/#compose-tasks)

The very basic version of it is using series
```
const { series } = require('gulp');

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

exports.build = series(transpile, bundle);
```

Using series, means we run tasks in order.

## Combine gulp tasks with parallel
If we don't need the order, we can use 'parallel'
"For tasks to run at maximum concurrency, combine them with the parallel() method."

```
const { parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css);
```

The example above shows, we don't need to wait for javascript task to finish. We can just run them simultaneously

## Using both series and parallel
If we have more than two tasks, it's possible that some task need to run in order, and some don't. We can combine both approach.

Example (from docs)
```
const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);
```