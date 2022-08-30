---
title: "How to solve Cannot use import statement outside a module error"
description: "This is How to solve  Cannot use import statement outside a module error when running a nodejs application"
date: 2022-08-30T23:21:00.000Z
topic: [nodejs]
series: [""]
draft: false
---
When using NodeJS, we can import any library with two ways, with require or import statement

Examples using require
```
const express = require('express');
```

Examples using import statement
```
import express from "express";
```

If we want to use the import statement, normally we get this error 
```
Cannot use import statement outside a module 
```

To solve this, we need to add `type:module` on our package.json file
```
...
 "type": "module",
...
```


