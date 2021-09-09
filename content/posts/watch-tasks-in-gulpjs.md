---
title: "Watch Tasks in Gulpjs"
description: "Learn how to watch Tasks in Gulpjs so the files can reload themselves when certain task triggered"
date: 2021-09-15T23:08:00.000Z
topic: [gulpjs]
series: ["Automate frontend task with GulpJS"]
draft: false
---
Learn how to watch Tasks in Gulpjs so the files can reload themselves when certain task triggered

## Create watch function
To make sure every tasks run at the first load, I'll be using series function, which means run multiples tasks in order.
```
//Assume I only want watch if any CSS or Javascript files change
//So I can run their tasks
function watchTask() {
    gulp.watch([cssPath, jsPath], gulp.parallel(cssTask, jsTask))
}

exports.default = gulp.series(
    gulp.parallel(cssTask, jsTask, imgTask),
    watchTask
)
```


