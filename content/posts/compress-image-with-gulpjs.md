---
title: "Compress image with GulpJS"
description: "Learn how to compress multiple images with GulpJS, we don't need any extra tools for this, just run our gulp tasks"
date: 2021-09-13T23:08:00.000Z
topic: [gulpjs]
series: ["Automate frontend task with GulpJS"]
draft: false
---
One way to make sure our website run faster, is by loading image with small size. But we're too lazy to compress our image, each time there is new assets. Don't worry Gulp JS will do it for us

## How to compress image in gulp js
Install [gulp imagemin](https://www.npmjs.com/package/gulp-imagemin)
```
npm install --save-dev gulp-imagemin
```

Basic Usage
```
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export default () => (
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);
```

Watchout the destination image. Now what you write in .dest() is your asset source. 