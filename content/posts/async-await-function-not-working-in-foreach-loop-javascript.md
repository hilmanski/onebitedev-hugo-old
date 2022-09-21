---
title: "Async await function not working in forEach loop Javascript"
description: "This is a quick solve on how to handle async await function not working in forEach loop Javascript"
date: 2022-09-21T00:17:00.000Z
topic: [javascript]
series: [""]
draft: false
---
This is a quick solve on how to handle async await function not working in forEach loop Javascript.

It happens many time to me, that my async functions didn't work. I didn't know what's the cause. Apparently it's all because I put it inside forEach loop.

This is not a long tutorial, of the cause and better way. Rather it's just how you can make your code works again.

The quick solution will be turn your forEach element into a normal for loop like this:


```
// NOw
for (let index = 0; index < elements.length; index++) {
```

```
// Before
elements.forEach((element){
..
})
```
