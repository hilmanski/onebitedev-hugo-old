---
title: "How to resolve Option --resolveJsonModule cannot be specified without node module resolution strategy.ts"
description: "This is how to resolve Option '--resolveJsonModule' cannot be specified without 'node' module resolution strategy.ts error on typescript tsconfig.json file"
date: 2022-09-15T21:34:00.000Z
topic: [typescript]
series: [""]
draft: false
---
This is how to resolve Option '--resolveJsonModule' cannot be specified without 'node' module resolution strategy.ts error on typescript tsconfig.json file

**How to solve this issue?**

What we need is adding 
```
"moduleResolution": "node",
```

inside `compilerOptions` property in tsconfig.json file

Read about [module resolution in typescript](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
