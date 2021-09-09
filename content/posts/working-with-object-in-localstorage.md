---
title: "Working with object in localstorage"
description: "We all love localstorage, no database needed to store simple things for our user. But what if the data is more than a string or number? How to store and read object in localstorage?"
date: 2021-09-08T19:31:00.000Z
topic: [javascript]
series: [""]
draft: false
---
We all love [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), no database needed to store simple things for our user.   
But what if the data is more than a string or number?   
Let's see how to store and read object in localstorage?



## How to store object in localstorage

We need to turn json into a string with JSON.stringify
```
localstorage.setItem(key, JSON.stringify(val));
```

## How to read/retrieve object from localstorage

We need to parse into json with JSON.parse
```
JSON.parse(localstorage.getItem(key))
```

## Bonus: Helper for read and write objects in localstorage

```
function getObjectLS(key) {
    return JSON.parse(localStorage.getItem(key))
}

function setObjectLS(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}
```


